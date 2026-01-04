from indy_utils import indydcp_client as client
from pymcprotocol import Type3E
import tkinter as tk
from tkinter import ttk
import threading
from time import sleep

# =============================================================================
# 1. 설정 및 상수
# =============================================================================

# [통신 설정]
ROBOT_IP = "192.168.3.3"
ROBOT_NAME = "NRMK-Indy7"
PLC_IP = "192.168.3.30"
PLC_PORT = 1025

# [PLC 주소]
ADDR_START_6 = "M100"  # 6구 시작
ADDR_START_4 = "M101"  # 4구 시작
ADDR_DONE    = "M102"  # 공통 완료
ADDR_ESTOP   = "M110"  # 비상 정지
ADDR_DONE_6  = "M111"  # 6구 완료 추가신호
ADDR_DONE_4  = "M112"  # 4구 완료 추가신호

# [공압(진공) 설정]
DO_VACUUM_PIN = 2

# [안전 설정]
OFFSET_Z_6 = 0.10     # 6구 모델 및 픽업 시 안전 높이 (10cm)
OFFSET_Z_4 = 0.05     # 4구 모델 조립 시 낮은 높이 (5cm)
VEL_NORMAL = 1        
VEL_SLOW = 1          

# [뚜껑 적재 설정]
LID_THICKNESS_6 = 0.030  # 6구 뚜껑 두께
LID_THICKNESS_4 = 0.025  # 4구 뚜껑 두께
MAX_LID_COUNT = 3       # 최대 적재 개수

# [카운트 및 재공급 상태]
cnt_lid_6 = 0
cnt_lid_4 = 0
is_refill_needed_6 = False 
is_refill_needed_4 = False 

# [제어 플래그]
stop_event = threading.Event()
is_auto_running = False
is_moving = False

# =============================================================================
# 2. 장비 연결
# =============================================================================
indy = client.IndyDCPClient(ROBOT_IP, ROBOT_NAME)
plc = Type3E()

def connect_devices():
    try:
        indy.connect()
        print("[Indy7] 로봇 연결 성공")
        indy.set_task_vel_level(VEL_NORMAL)
        indy.set_joint_vel_level(VEL_NORMAL)
    except Exception as e:
        print(f"[Indy7] 연결 실패: {e}")
    try:
        plc.connect(PLC_IP, PLC_PORT)
        print("[PLC] 연결 성공")
    except Exception as e:
        print(f"[PLC] 연결 실패: {e}")

connect_devices()

# =============================================================================
# 3. 태스크 좌표 설정
# =============================================================================

# [홈 위치]
POS_HOME = [0.186497, 0.350004, 0.521976, 0, -180, 90]

# -----------------------------------------------------------
# [모델 1: 6구형]
# -----------------------------------------------------------
POS_LID_STACK_6 = [0.22833249070284695, 0.588575163875865, 0.35714832443363015, 0, -180, 90]
POS_FUSEBOX_6   = [0.5456801307722802, 0.4481378957557919, 0.3132072688035532, -0.321834174535863, -179.62821772769897, 91.70491160639337]
POS_STACK_EXIT_6 = [0.22833249070284695, 0.588575163875865, 0.48281149274871754, 0, -180, 90] 

# 상공 위치 자동 생성 (6구 안전높이 적용)
POS_FUSEBOX_UP_6 = list(POS_FUSEBOX_6); POS_FUSEBOX_UP_6[2] += OFFSET_Z_6

# -----------------------------------------------------------
# [모델 2: 4구형]
# -----------------------------------------------------------
POS_LID_STACK_4 = [0.2388324415007582, 0.4775301842513517, 0.34271001729243494, 0, -180, 90] 
POS_FUSEBOX_4   = [0.5458525423789972, 0.45639621972594635, 0.32127296711127047, -0.11961509199015448, -179.94948836053413, 90.1304062053552]
POS_STACK_EXIT_4 = [0.23937825426036163, 0.47785950619650513, 0.4765068971144833, 0, -180, 90]

# 상공 위치 자동 생성 (4구 안전높이 적용)
POS_FUSEBOX_UP_4 = list(POS_FUSEBOX_4); POS_FUSEBOX_UP_4[2] += OFFSET_Z_4

# =============================================================================
# 4. 제어 함수
# =============================================================================

def check_stop():
    if stop_event.is_set(): raise Exception("비상정지 발동!")

def wait_for_motion():
    while True:
        if stop_event.is_set(): break 
        if indy.get_robot_status()["movedone"] == 1: break
        sleep(0.1)

def move_safe(target_pos, speed=None):
    check_stop()
    if speed: indy.set_task_vel_level(speed)
    indy.task_move_to(target_pos)
    wait_for_motion()
    if speed: indy.set_task_vel_level(VEL_NORMAL)

def rotate_j6_relative(angle_deg):
    check_stop()
    print(f"   [회전] J6축 {angle_deg}도 회전")
    j_pos = indy.get_joint_pos()
    j_pos[5] += angle_deg
    indy.joint_move_to(j_pos)
    wait_for_motion()

def gripper_control(action):
    check_stop()
    print(f"[Vacuum] {action}")
    if action == 'close': indy.set_do(DO_VACUUM_PIN, 1)
    elif action == 'open': indy.set_do(DO_VACUUM_PIN, 0)
    sleep(0.5)

def precise_assembly(target_pos):
    entry_pos = list(target_pos); entry_pos[2] += 0.01 
    move_safe(entry_pos)
    print("   [조립] 정밀 하강")
    move_safe(target_pos, speed=VEL_SLOW)

# =============================================================================
# 5. 공정 로직
# =============================================================================

def run_packaging_cycle(model_type):
    global cnt_lid_6, cnt_lid_4, is_moving, is_refill_needed_6, is_refill_needed_4
    
    if is_moving: return
    
    # [재공급 체크]
    if model_type == 6 and is_refill_needed_6:
        print("[Warning] 6구 뚜껑 부족! 재공급(시작 위치 설정) 필요.")
        return
    if model_type == 4 and is_refill_needed_4:
        print("[Warning] 4구 뚜껑 부족! 재공급(시작 위치 설정) 필요.")
        return

    is_moving = True
    
    try:
        if stop_event.is_set(): return
        
        # 모델별 변수 매핑
        if model_type == 6:
            name = "6구"; stack_pos = POS_LID_STACK_6
            fuse_pos = POS_FUSEBOX_6; fuse_up = POS_FUSEBOX_UP_6
            exit_pos = POS_STACK_EXIT_6
            curr_idx = cnt_lid_6
            thickness = LID_THICKNESS_6
            offset_pick = OFFSET_Z_6
        elif model_type == 4:
            name = "4구"; stack_pos = POS_LID_STACK_4
            fuse_pos = POS_FUSEBOX_4; fuse_up = POS_FUSEBOX_UP_4
            exit_pos = POS_STACK_EXIT_4
            curr_idx = cnt_lid_4
            thickness = LID_THICKNESS_4
            offset_pick = OFFSET_Z_6
        else: return

        print(f"\n--- [{name}] 진행 중 ({curr_idx + 1}번째 뚜껑 사용) ---")

        # -----------------------------------------------
        # 1. 뚜껑 픽업
        # -----------------------------------------------
        pick_z = stack_pos[2] - (curr_idx * thickness)
        target_pick = list(stack_pos); target_pick[2] = pick_z
        target_pick_up = list(target_pick); target_pick_up[2] += offset_pick

        gripper_control('open')

        # 접근
        print("   1. 적재함 진입")
        move_safe(exit_pos)
        move_safe(target_pick_up) 
        
        # 픽업
        move_safe(target_pick, speed=VEL_SLOW) 
        gripper_control('close') 
        
        # 후퇴
        move_safe(target_pick_up)
        print("   2. 틀 탈출 이동")
        move_safe(exit_pos)

        # -----------------------------------------------
        # 2. 퓨즈박스 조립
        # -----------------------------------------------
        if model_type == 4:
            print("   3. 4구 조립 위치 이동")
            pre_rotate_up = list(fuse_up)
            pre_rotate_up[3:] = target_pick[3:] 
            move_safe(pre_rotate_up)
            precise_assembly(fuse_pos)
        else:
            print("   3. 6구 조립 위치 이동")
            move_safe(fuse_up)
            precise_assembly(fuse_pos)

        gripper_control('open')
        move_safe(fuse_up)

        # -----------------------------------------------
        # 3. 완료 및 카운트
        # -----------------------------------------------
        move_safe(POS_HOME)
        
        if model_type == 6:
            cnt_lid_6 += 1
            if cnt_lid_6 >= MAX_LID_COUNT:
                print(">> [Stop] 6구 뚜껑 모두 소진.")
                is_refill_needed_6 = True
        else:
            cnt_lid_4 += 1
            if cnt_lid_4 >= MAX_LID_COUNT:
                print(">> [Stop] 4구 뚜껑 모두 소진.")
                is_refill_needed_4 = True

        print("--- 완료 ---")

    except Exception as e:
        print(f"[에러] {e}")
    finally:
        is_moving = False

# =============================================================================
# 6. 백그라운드 작업 (PLC & 모니터링)
# =============================================================================

def start_auto_mode():
    global is_auto_running
    if stop_event.is_set():
        lbl_status.config(text="비상정지 상태!", fg="red"); return
    is_auto_running = True
    lbl_status.config(text="자동 모드 ON (PLC 대기 중)", fg="blue")
    print("[Auto] 자동 모드 시작")

def stop_auto_mode():
    global is_auto_running
    is_auto_running = False
    lbl_status.config(text="자동 모드 OFF (수동)", fg="gray")
    print("[Auto] 자동 모드 정지")

def test_run(model):
    if stop_event.is_set() or is_moving: return
    if (model==6 and is_refill_needed_6) or (model==4 and is_refill_needed_4):
        print(f"[Warning] {model}구 뚜껑 부족. 시작 위치를 재설정하세요.")
        return
    print(f"[Test] {model}구 강제 실행")
    threading.Thread(target=run_packaging_cycle, args=(model,)).start()

def plc_monitor():
    prev_estop = 0
    
    while True:
        # [M110 비상정지]
        try:
            estop_data = plc.batchread_bitunits(ADDR_ESTOP, 1)
            curr_estop = estop_data[0] if estop_data else prev_estop

            if curr_estop == 1 and prev_estop == 0:
                print("\n[PLC] M110 비상정지 발생!")
                stop_event.set()
                indy.stop_motion()
                stop_auto_mode()
                lbl_status.config(text="!!! PLC 비상정지 (M110) !!!", fg="red")
            
            elif curr_estop == 0 and prev_estop == 1:
                print("\n[PLC] M110 해제됨.")
                stop_event.clear()
                lbl_status.config(text="대기 중 (해제됨)", fg="gray")

            prev_estop = curr_estop
        except: pass

        # [자동 운전]
        if stop_event.is_set() or not is_auto_running or is_moving:
            sleep(0.2); continue
        
        try:
            data = plc.batchread_bitunits(ADDR_START_6, 2)
            model = 0
            if data and data[0] == 1: model = 6; s_addr = ADDR_START_6
            elif data and data[1] == 1: model = 4; s_addr = ADDR_START_4

            if model > 0:
                # 뚜껑 부족 체크
                if (model == 6 and is_refill_needed_6) or (model == 4 and is_refill_needed_4):
                    print(f"[PLC] {model}구 뚜껑 부족. 대기 중.")
                    sleep(1); continue

                print(f"\n[PLC] {model}구 신호 감지!")
                run_packaging_cycle(model)
                
                if not stop_event.is_set() and is_auto_running:
                    # 완료 신호 (M102 + 개별)
                    plc.batchwrite_bitunits(ADDR_DONE, [1])
                    if model == 6: plc.batchwrite_bitunits(ADDR_DONE_6, [1]) # M112
                    else: plc.batchwrite_bitunits(ADDR_DONE_4, [1]) # M111
                    
                    sleep(1)
                    
                    plc.batchwrite_bitunits(ADDR_DONE, [0])
                    if model == 6: plc.batchwrite_bitunits(ADDR_DONE_6, [0])
                    else: plc.batchwrite_bitunits(ADDR_DONE_4, [0])

                    while True:
                        check = plc.batchread_bitunits(s_addr, 1)
                        if check and check[0] == 0: break
                        if stop_event.is_set() or not is_auto_running: break
                        sleep(0.5)
            sleep(0.2)
        except: sleep(1)

def robot_pos_monitor():
    while True:
        try:
            t_pos = indy.get_task_pos()
            j_pos = indy.get_joint_pos()
            if t_pos and j_pos:
                t_str = f"X:{t_pos[0]:.3f} Y:{t_pos[1]:.3f} Z:{t_pos[2]:.3f}\nU:{t_pos[3]:.1f} V:{t_pos[4]:.1f} W:{t_pos[5]:.1f}"
                j_str = f"J1:{j_pos[0]:.1f} J2:{j_pos[1]:.1f} J3:{j_pos[2]:.1f}\nJ4:{j_pos[3]:.1f} J5:{j_pos[4]:.1f} J6:{j_pos[5]:.1f}"
                lbl_curr_task.config(text=t_str)
                lbl_curr_joint.config(text=j_str)
            sleep(0.5)
        except: sleep(1)

threading.Thread(target=plc_monitor, daemon=True).start()
threading.Thread(target=robot_pos_monitor, daemon=True).start()

def manual_move(target_pos):
    if stop_event.is_set() or is_moving: return
    threading.Thread(target=move_safe, args=(target_pos,)).start()

# ★시작 위치 설정 함수 (추가됨)★
def set_lid_start(model, val_str):
    global cnt_lid_6, cnt_lid_4, is_refill_needed_6, is_refill_needed_4
    try:
        val = int(val_str)
        # 입력값 1,2,3 -> 인덱스 0,1,2로 변환
        idx = val - 1 
        
        if model == 6:
            cnt_lid_6 = idx
            is_refill_needed_6 = False # 리필 완료 처리
            print(f"[Setting] 6구 시작 위치: {val}번째 (Index {idx}) 설정됨.")
        elif model == 4:
            cnt_lid_4 = idx
            is_refill_needed_4 = False # 리필 완료 처리
            print(f"[Setting] 4구 시작 위치: {val}번째 (Index {idx}) 설정됨.")
    except:
        print("[Error] 숫자 변환 오류")

def reset_all_cnt():
    # 전체 리셋 (1번부터 시작)
    set_lid_start(6, "1")
    set_lid_start(4, "1")
    print("모든 카운트 1번(Index 0)으로 초기화 완료")

# =============================================================================
# 7. GUI 구성
# =============================================================================
root = tk.Tk()
root.title("Indy7 다품종 포장기")
root.geometry("450x750") # 높이 약간 늘림

tk.Label(root, text="퓨즈박스 자동 포장 시스템", font=("Arial", 16, "bold")).pack(pady=10)
lbl_status = tk.Label(root, text="대기 중 (자동 OFF)", font=("Arial", 11), fg="gray")
lbl_status.pack(pady=5)

# [실시간 좌표]
frame_pos = tk.LabelFrame(root, text="📡 실시간 로봇 좌표", padx=10, pady=5)
frame_pos.pack(padx=10, fill="x", pady=5)
lbl_curr_task = tk.Label(frame_pos, text="Loading...", font=("Consolas", 9), fg="blue")
lbl_curr_task.pack()
lbl_curr_joint = tk.Label(frame_pos, text="Loading...", font=("Consolas", 9), fg="darkgreen")
lbl_curr_joint.pack()

# [비상 정지]
frame_estop = tk.Frame(root)
frame_estop.pack(fill="x", padx=10, pady=10)
tk.Button(frame_estop, text="⛔ 비상 정지 ⛔", 
          command=lambda: (stop_event.set(), indy.stop_motion(), stop_auto_mode(), lbl_status.config(text="비상정지!", fg="red")), 
          bg="red", fg="white", font=("bold", 12), height=2).pack(fill="x")
tk.Button(frame_estop, text="시스템 리셋 (재시동)", 
          command=lambda: (stop_event.clear(), lbl_status.config(text="대기 중", fg="gray")), 
          bg="lightgray").pack(fill="x", pady=2)

# [자동 공정 제어]
frame_auto = tk.LabelFrame(root, text="🤖 자동 운전 제어", padx=10, pady=10)
frame_auto.pack(padx=10, fill="x", pady=5)
tk.Button(frame_auto, text="🟢 자동 공정 시작 (PLC 감시)", command=start_auto_mode, bg="#90EE90", height=2).pack(fill="x", pady=2)
tk.Button(frame_auto, text="🔴 자동 공정 정지", command=stop_auto_mode, bg="#FFB6C1", height=2).pack(fill="x", pady=2)

# [테스트 및 수동 이동]
frame_manual = tk.LabelFrame(root, text="🛠 테스트 및 위치 확인", padx=10, pady=10)
frame_manual.pack(padx=10, fill="x", pady=5)

# 홈
tk.Button(frame_manual, text="🏠 홈 이동", command=lambda: manual_move(POS_HOME), bg="lightblue").grid(row=0, column=0, columnspan=2, sticky="ew", padx=2, pady=2)

# 6구 제어
tk.Label(frame_manual, text="[6구 모델]").grid(row=1, column=0, columnspan=2, pady=5)
tk.Button(frame_manual, text="적재함", command=lambda: manual_move(POS_LID_STACK_6)).grid(row=2, column=0, sticky="ew", padx=2)
tk.Button(frame_manual, text="탈출위치", command=lambda: manual_move(POS_STACK_EXIT_6)).grid(row=2, column=1, sticky="ew", padx=2)
tk.Button(frame_manual, text="▶ 1회 강제 실행", command=lambda: test_run(6), bg="orange").grid(row=3, column=0, columnspan=2, sticky="ew", padx=2, pady=2)

# 4구 제어
tk.Label(frame_manual, text="[4구 모델]").grid(row=4, column=0, columnspan=2, pady=5)
tk.Button(frame_manual, text="적재함", command=lambda: manual_move(POS_LID_STACK_4)).grid(row=5, column=0, sticky="ew", padx=2)
tk.Button(frame_manual, text="탈출위치", command=lambda: manual_move(POS_STACK_EXIT_4)).grid(row=5, column=1, sticky="ew", padx=2)
tk.Button(frame_manual, text="▶ 1회 강제 실행", command=lambda: test_run(4), bg="yellow").grid(row=6, column=0, columnspan=2, sticky="ew", padx=2, pady=2)

frame_manual.columnconfigure(0, weight=1)
frame_manual.columnconfigure(1, weight=1)

# [시작 위치 설정 (재공급)]
frame_set = tk.LabelFrame(root, text="📦 시작 위치 설정 (재공급)", padx=10, pady=10)
frame_set.pack(padx=10, fill="x", pady=5)

# 6구 설정
tk.Label(frame_set, text="6구 시작:").grid(row=0, column=0)
combo_6 = ttk.Combobox(frame_set, values=["1", "2", "3"], width=3, state="readonly")
combo_6.current(0) # 기본 1
combo_6.grid(row=0, column=1, padx=5)
tk.Button(frame_set, text="설정", command=lambda: set_lid_start(6, combo_6.get()), bg="lightgray", width=5).grid(row=0, column=2)

# 4구 설정
tk.Label(frame_set, text="4구 시작:").grid(row=0, column=3, padx=(10, 0))
combo_4 = ttk.Combobox(frame_set, values=["1", "2", "3"], width=3, state="readonly")
combo_4.current(0) # 기본 1
combo_4.grid(row=0, column=4, padx=5)
tk.Button(frame_set, text="설정", command=lambda: set_lid_start(4, combo_4.get()), bg="lightgray", width=5).grid(row=0, column=5)

# 전체 초기화 버튼
tk.Button(frame_set, text="전체 초기화 (1번)", command=reset_all_cnt, bg="cyan").grid(row=1, column=0, columnspan=6, sticky="ew", pady=10)

def on_closing():
    stop_event.set(); indy.disconnect(); plc.close(); root.destroy()
root.protocol("WM_DELETE_WINDOW", on_closing)
root.mainloop()