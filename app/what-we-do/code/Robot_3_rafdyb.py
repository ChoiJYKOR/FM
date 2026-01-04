from indy_utils import indydcp_client as client
from pymcprotocol import Type3E
import tkinter as tk
import threading
from time import sleep
import time
import serial

# 로봇 연결
ROBOT_IP = "192.168.3.4"
ROBOT_NAME = "NRMK-Indy7"
indy = client.IndyDCPClient(ROBOT_IP, ROBOT_NAME)
indy.connect()
print("Indy7 연결 성공")
# PLC 연결
PLC_IP = "192.168.3.40"
PLC_PORT = 1025
PLC_START1 = "M100"   # PLC → Python (4구 퓨즈)
PLC_START2 = "M200"   # PLC → Python (6구 퓨즈)
PLC_DONE1  = "M101"   # Python → PLC (4구 퓨즈)
PLC_DONE2  = "M201"   # Python → PLC (6구 퓨즈)
plc = Type3E()
plc.connect(PLC_IP, PLC_PORT)
print("PLC 연결 성공")

PICK_BASE = [0.4009144806684617, -0.137002230553104316, 0.22518344717348545]  # 픽 기준점 (x, y, z)
PLACE_BASE1 = [0.2253302287311629, 0.3035959428198188, 0.2103153180831042]    # 4구 플레이스 기준점 (x, y, z)
PLACE_BASE2 = [0.2253302287311629, 0.5535959428198188, 0.2103153180831042]    # 6구 플레이스 기준점 (x, y, z)

GRID_X = 2                     # 가로로 둘 칸수
GRID_Y = 2                     # 세로로 둘 줄수
NUM_LAYERS = 2                 # 쌓을 층수
LAYER_HEIGHT = 0.06            # 층 높이 (6cm)
OFFSET_X = 0.11                # X 간격 (11cm)
OFFSET_Y = 0.11                # Y 간격 (11cm)
RETRACT_Z = 0.15               # Pick/Place 시 하강 및 리트랙 거리 (15cm)
ROTATION = [0, 180, 0]         # 로봇자세 (rx, ry, rz)
NUM1 = 0                       # 4구 양품 개수
NUM2 = 0                       # 6구 양품 개수



# --- Pick 과정 ---
def pick():
    # (1) 픽 접근 위치로 이동
    indy.task_move_to([PICK_BASE[0], PICK_BASE[1], PICK_BASE[2] + RETRACT_Z, 0, 180, 88.27]) 
    wait_robot()
    # (2) 픽 지점으로 5cm 하강
    indy.task_move_to([PICK_BASE[0], PICK_BASE[1], PICK_BASE[2], 0, 180, 88.27])
    wait_robot()
    # (3) 흡착 ON (1초 유지)
    # indy.set_do(2, True) #
    indy.set_do(0, False)  ##
    indy.set_do(1, True)  ##
    print("그리퍼 ON (Picking...)")
    time.sleep(1)
    # (4) 5cm 리트랙
    indy.task_move_to([PICK_BASE[0], PICK_BASE[1], PICK_BASE[2] + RETRACT_Z, 0, 180, 88.27])
    wait_robot()

# 4구 양품 n번째 위치 설정
def get_place_position1(NUM):
    layer = NUM // (GRID_X * GRID_Y)
    index = NUM % (GRID_X * GRID_Y)
    row = index // GRID_X
    col = index % GRID_X

    x = PLACE_BASE1[0] - col * OFFSET_X
    y = PLACE_BASE1[1] + row * OFFSET_Y
    z = PLACE_BASE1[2] + layer * LAYER_HEIGHT
    
    return [x, y, z]

# 6구 양품 n번째 위치 설정
def get_place_position2(NUM):
    layer = NUM // (GRID_X * GRID_Y)
    index = NUM % (GRID_X * GRID_Y)
    row = index // GRID_X
    col = index % GRID_X

    x = PLACE_BASE2[0] - col * OFFSET_X
    y = PLACE_BASE2[1] + row * OFFSET_Y
    z = PLACE_BASE2[2] + layer * LAYER_HEIGHT
 
    return [x, y, z]

# --- 4구 양품 팔렛타이징 ---
def place1(NUM):
    pos = get_place_position1(NUM)

    # (1) 접근위치로 이동    
    indy.task_move_to([pos[0], pos[1], pos[2] + RETRACT_Z, *ROTATION])
    wait_robot()
    # (2) 플레이스 지점으로 5cm 하강
    indy.task_move_to([pos[0], pos[1], pos[2], *ROTATION])
    wait_robot()
    # (3) 흡착 OFF (1초 유지)
    # indy.set_do(2, False) #
    indy.set_do(1, False) ##
    indy.set_do(0, True)  ##
    print("그리퍼 OFF (Placing...)")
    time.sleep(1)
    # (4) 5cm 리트랙
    indy.task_move_to([pos[0], pos[1], pos[2] + RETRACT_Z, *ROTATION])
    wait_robot()
    
    indy.go_home()
    wait_robot()

# --- 6구 양품 팔렛타이징 ---
def place2(NUM):
    pos = get_place_position2(NUM)

    # (1) 접근위치로 이동    
    indy.task_move_to([pos[0], pos[1], pos[2] + RETRACT_Z, *ROTATION])
    wait_robot()
    # (2) 플레이스 지점으로 5cm 하강
    indy.task_move_to([pos[0], pos[1], pos[2], *ROTATION])
    wait_robot()
    # (3) 흡착 OFF (1초 유지)
    # indy.set_do(2, False) #
    indy.set_do(1, False) ##
    indy.set_do(0, True)  ##
    print("그리퍼 OFF (Placing...)")
    time.sleep(1)
    # (4) 5cm 리트랙
    indy.task_move_to([pos[0], pos[1], pos[2] + RETRACT_Z, *ROTATION])
    wait_robot()
    
    indy.go_home()
    wait_robot()

# PLC 감시 스레드
def plc_monitor():
    global NUM1    # 4구 양품 갯수
    global NUM2    # 6구 양품 갯수
    print("PLC 감시 시작")
    is_home = True
    while True:
        try:
            start_sig1 = plc.batchread_bitunits(PLC_START1, 1)[0]
            if start_sig1 == 1:
                print("4구 퓨즈", NUM1+1,"번째 상품을 적재합니다.")
                pick()
                place1(NUM1)
                NUM1 += 1                
                plc.batchwrite_bitunits(PLC_DONE1, [1])
                sleep(0.5)
                plc.batchwrite_bitunits(PLC_DONE1, [0])
                
                while plc.batchread_bitunits(PLC_START1, 1)[0] == 1:
                    sleep(0.1)
    
            start_sig2 = plc.batchread_bitunits(PLC_START2, 1)[0]
            if start_sig2 == 1:
                print("6구 퓨즈", NUM2+1,"번째 상품을 적재합니다.")
                pick()
                place2(NUM2)
                NUM2 += 1                    
                plc.batchwrite_bitunits(PLC_DONE2, [1])
                sleep(0.5)
                plc.batchwrite_bitunits(PLC_DONE2, [0])
                
                while plc.batchread_bitunits(PLC_START2, 1)[0] == 1:
                    sleep(0.1)
            sleep(0.1)    
        
        except Exception as e:
            print("PLC 오류:", e)
            sleep(1)

def on_close():
    print("종료 중...")
    indy.disconnect()
    plc.close()

if __name__ == "__main__":
    move_home()
    threading.Thread(target=plc_monitor, daemon=True).start()
    while True:
        sleep(1)
