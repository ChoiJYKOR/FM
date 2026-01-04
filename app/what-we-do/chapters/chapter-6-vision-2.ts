import type { Chapter } from '../types';

export const chapter6: Chapter = {
  id: 6,
  title: "비전 테스트",
  description: "색상별 퓨즈, 결착된 뚜껑의 품질을 비전 검사로 확인합니다.",
  images: [
    {
      items: [
        {
          type: 'code',
          language: 'python',
          code: `# 양품일 때 D100에 박스 종류(4구: 1, 6구: 2) 전송하고 PLC 신호 보내기
if action == 'OK':
    plc_obj.batchwrite_wordunits("D100", [value])
    plc_obj.batchwrite_bitunits("M101", [1])
    print(f"PLC OK 신호 전송 (D100={value})")
    time.sleep(0.5)
    plc_obj.batchwrite_bitunits("M101", [0])
    
# 불량품일 때 D100에 박스 종류(4구: 3, 6구: 4) 전송하고 PLC 신호 보내기 
elif action == 'NG':
    plc_obj.batchwrite_wordunits("D100", [value])
    plc_obj.batchwrite_bitunits("M102", [1])
    print("PLC NG 신호 전송 (M102=1)")
    time.sleep(0.5)
    plc_obj.batchwrite_bitunits("M102", [0])

# 카메라 내에 객체가 검출되지 않으면 신호 리셋
elif action == 'RESET':
    plc_obj.batchwrite_bitunits("M102", [0])
    plc_obj.batchwrite_bitunits("M101", [0])
    plc_obj.batchwrite_wordunits("D100", [0])
    print("PLC 초기화 신호 전송")`
        },
        {
          type: 'code',
          language: 'python',
          code: `# 변수값 초기화, COOLDOWN 설정
last_signal_time = 0
COOLDOWN = 0.3  # 300ms
last_task = None

# YOLO 모델로 검출한 결과에 따라 변수 저장
# 클래스는 ["4box_OK", "6box_OK", "4box_NG_BR", "4box_NG_RB", "6box_NG"]
if class_name == "4box_OK":
    detected_box_type = 1
elif class_name == "6box_OK":
    detected_box_type = 2
elif "4box_NG" in class_name:
    detected_ng_box_type = 3
elif class_name == '6box_NG':
    detected_ng_box_type = 4

 # PLC 큐에 넣기 (들어온 데이터 순서대로 처리하기 위함)
now = time.time()  # 300ms 안에는 다시 신호를 보내지 않음 (중복 신호 방지)
if now - last_signal_time > COOLDOWN:
    task_to_add = None
    if detected_ng_box_type in (3, 4):  # NG 신호 전송
        task_to_add = ('NG', detected_ng_box_type)
    elif detected_box_type in (1, 2):  # OK 신호 전송
        task_to_add = ('OK', detected_box_type)
    else:  # 리셋 신호 전송
        task_to_add = ('RESET', None)

    # 중복 신호 방지 (직전 신호와 다를 때에만 큐에 넣음)
    if task_to_add != last_task:
        plc_queue.put(task_to_add)
        last_signal_time = now
        last_task = task_to_add`
        }
      ],
      sections: [
        {
          title: "비전1: 색상 판별",
          description: [
            "YOLO 모델 기반 불량/양품 판별 (4box_OK/NG, 6box_OK/NG 등)",
            "검출 결과(OK/NG)에 따라 PLC(D100, M101, M102)로 제어 신호 전송",
            "신호 중복 방지(COOLDOWN 0.3s) 및 큐(Queue) 기반의 안정적 데이터 처리",
          ],
        },
      ],
    },
    {
      urls: [
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767551880/type4_mctab4.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767551895/type6_nigsby.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767490711/image_6_xc9ovy.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767490707/image_7_megevc.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767490708/image_12_foxzxz.png"
      ],
      sections: [
        {
          title: "비전2: 데이터 전처리 및 증강",
          description: [
            "객체 라벨링 및 증강 도구 “ROBOFLOW” 사이트 활용",
            "이미지 전처리: Auto-Orient, Resize, Grayscale 적용",
            "데이터 증강: Flip, Rotate, Noise Injection 등을 통한 모델 강건성 확보",

          ],
        },
      ],
    },
    {
      items: [
        {
          type: 'code',
          language: 'python',
          code: `# roboflow 설치
!pip install roboflow

# ----------------------------------------------
# Roboflow 연동 및 데이터셋 준비
#  - Roboflow API를 통해 프로젝트에 연결
#  - 지정된 Workspace 및 Project 선택
#  - YOLOv8 형식으로 데이터셋 다운로드
# ----------------------------------------------
from roboflow import Roboflow
rf = Roboflow(api_key="vRAlsA0zjGEIvV27astU")
project = rf.workspace("dx-qxtvt").project("dx-mac_vi-proj")
version = project.version(1)
dataset = version.download("yolov8")

# ----------------------------------------------
# 학습 이미지 목록 생성
#  - glob을 사용하여 train 이미지 경로 자동 수집
#  - YOLO 학습에서 사용할 이미지 리스트를 생성
#  - train.txt 파일에 이미지 경로를 한 줄씩 저장
# ----------------------------------------------
from glob import glob  # 이미지 파일을 한번에 모으기 위한 모듈

img_list = glob('/content/DX-mac_Vi-Proj.-1/train/images/*.jpg')  # 학습 이미지 경로 수집

# ----------------------------------------------
# YOLO 학습용 train.txt 파일 생성
#  - YOLO는 train.txt를 기반으로 학습 대상 이미지를 인식
# ----------------------------------------------
with open('/content/DX-mac_Vi-Proj.-1/train.txt', 'w') as f:
    f.write('\\n'.join(img_list) + '\\n')

# ----------------------------------------------
# YOLO 학습 실행
#  - YOLOv8n 모델을 기반으로 학습 진행
#  - data.yaml을 통해 데이터 설정 적용
#  - 주요 학습 파라미터:
#       Epoch: 50
#       Image Size: 512
#       Batch Size: 16
#  - 학습 결과는 result_dx 이름으로 저장
# ----------------------------------------------
!yolo train model=yolov8n.pt data=/content/DX-mac_Vi-Proj.-1/data.yaml epochs=50 imgsz=512 batch=16 name=result_dx`
        },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767490734/image_zh59dz.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767490733/image_1_vpixpk.png" }
      ],
      sections: [
        {
          title: "비전2: YOLO 탐지 신뢰도(Confidence)",
          description: [
            "YOLOv8 모델 학습 파이프라인 구축 (데이터셋 다운로드 → 학습 구성 → 실행)",
            "YOLO 모델의 객체 검출 신뢰도(Confidence Score) 분석",
            "실시간 경계 박스(Bounding Box) 시각화 및 클래스 판별 결과 확인",

          ],
        },
      ],
    },
    {
      items: [
        {
          type: 'code',
          language: 'python',
          code: `from ultralytics import YOLO
import cv2
import os
import time

# ============================================
# 1) YOLO 모델 및 카메라 초기화
#    - 사전 학습된 YOLO 모델 로드
#    - 웹캠(카메라) 열어서 실시간 영상 입력 준비
# ============================================
model = YOLO(r"C:\\Users\\JaeYoung\\Desktop\\test\\best_2.pt")
cap = cv2.VideoCapture(0)

# ============================================
# 2) ROI 저장 경로 설정
#    - 기본 경로 하위에 OK / NG 폴더 생성
#    - 키보드 입력에 따라 ROI 이미지를
#      OK 또는 NG 폴더로 분류 저장하기 위함
# ============================================
BASE_SAVE_DIR = r"C:\\Users\\JaeYoung\\Desktop\\ROI"
OK_DIR = os.path.join(BASE_SAVE_DIR, "OK")
NG_DIR = os.path.join(BASE_SAVE_DIR, "NG")

os.makedirs(OK_DIR, exist_ok=True)
os.makedirs(NG_DIR, exist_ok=True)

# ============================================
# 3) ROI 파라미터 (비율 기준)
#    - YOLO가 검출한 박스 내부에서
#      실제로 저장할 부분(관심 영역, ROI)을
#      비율로 정의
# ============================================
ROI_X_MARGIN = 0.05   # 좌우 5%는 제외 (가장자리 마진)
ROI_Y_TOP = 0.40      # bounding 박스 높이 기준 상단 40% 지점에서 시작
ROI_Y_BOTTOM = 0.75   # bounding 박스 높이 기준 상단 75% 지점까지 사용

last_roi = None  # 최근에 추출된 ROI 이미지(저장용 버퍼)

# ============================================
# 4) 메인 루프
#    - 카메라에서 프레임 읽기
#    - YOLO로 박스 검출 및 ROI 추출
#    - 화면 표시 및 키보드 입력에 따른 저장
# ============================================
while True:
    ret, frame = cap.read()
    if not ret:
        break  # 카메라 프레임을 읽지 못하면 종료

    # ------------------------
    # YOLO로 대상 검출
    # ------------------------
    results = model(frame, conf=0.95, verbose=False)
    annotated_frame = frame.copy()  # 박스 시각화용 복사본

    for r in results:
        if r.boxes is None:
            continue

        # 한 프레임에서 검출된 박스들 순회
        for box in r.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])

            w = x2 - x1
            h = y2 - y1

            # ---------------------------------
            # YOLO 박스 내부에서 ROI 영역 계산
            #  - 가로: 좌우 5% 제외
            #  - 세로: 상단 40% ~ 75% 구간만 사용
            # ---------------------------------
            roi_x1 = int(x1 + ROI_X_MARGIN * w)
            roi_x2 = int(x2 - ROI_X_MARGIN * w)
            roi_y1 = int(y1 + ROI_Y_TOP * h)
            roi_y2 = int(y1 + ROI_Y_BOTTOM * h)

            # 프레임 범위를 벗어나지 않도록 클램핑
            roi_x1 = max(0, roi_x1)
            roi_y1 = max(0, roi_y1)
            roi_x2 = min(frame.shape[1], roi_x2)
            roi_y2 = min(frame.shape[0], roi_y2)

            # 실제 ROI 추출
            roi = frame[roi_y1:roi_y2, roi_x1:roi_x2]

            # ROI가 유효한지 확인 (크기가 0이 아니어야 함)
            if roi.size == 0:
                continue

            # 마지막 ROI 버퍼에 저장 (키 입력 시 저장에 사용)
            last_roi = roi.copy()

            # ------------------------
            # 시각화: 전체 박스 + ROI 박스 표시
            # ------------------------
            cv2.rectangle(annotated_frame, (x1, y1), (x2, y2), (255, 0, 0), 2)      # YOLO 전체 박스(파란색)
            cv2.rectangle(annotated_frame, (roi_x1, roi_y1), (roi_x2, roi_y2), (0, 255, 0), 2)  # ROI 박스(초록색)

            # 별도 창에 ROI만 확대해 표시
            cv2.imshow("Joint ROI", roi)

            # 첫 번째 박스만 사용하고 루프 탈출
            break

    # 전체 영상(박스 포함) 표시
    cv2.imshow("YOLO Detection", annotated_frame)

    # 키 입력 처리
    key = cv2.waitKey(1) & 0xFF

    # ============================================
    # 5) 키 입력에 따른 ROI 저장
    #    - 'o' : 현재 ROI를 OK 폴더에 저장
    #    - 'n' : 현재 ROI를 NG 폴더에 저장
    #    - 'q' : 프로그램 종료
    # ============================================
    if key == ord('o') and last_roi is not None:
        # 현재 시간을 기반으로 파일명 생성 (중복 방지)
        filename = f"OK_{int(time.time()*1000)}.jpg"
        cv2.imwrite(os.path.join(OK_DIR, filename), last_roi)
        print(f"[SAVE] OK → {filename}")

    elif key == ord('n') and last_roi is not None:
        filename = f"NG_{int(time.time()*1000)}.jpg"
        cv2.imwrite(os.path.join(NG_DIR, filename), last_roi)
        print(f"[SAVE] NG → {filename}")

    elif key == ord('q'):
        # 'q' 키 입력 시 루프 종료
        break

# ============================================
# 6) 종료 처리
#    - 카메라 및 OpenCV 창 정리
# ============================================
cap.release()
cv2.destroyAllWindows()`
        },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553159/roi_4_set_e5tagr.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553105/roi_6_set_iyxj4m.png" },
      ],
      sections: [
        {
          title: "비전2: 학습 데이터 수집을 위한 ROI 추출",
          description: [
            "ROI(관심 영역) 자동 설정을 통한 고품질 데이터셋 구축",
            "YOLO 검출 박스 기반 동적 클롭(Dynamic Crop) 알고리즘 적용",
            "키보드 입력('O'/'N')에 따른 OK/NG 데이터 즉시 분류 및 저장",
          ],
        },
      ],
    },
    {
      items: [
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553597/colab_iswe8w.png" },
        {
          type: 'code',
          language: 'python',
          code: `from google.colab import drive
drive.mount('/content/drive')
import torch
import torchvision
from torchvision import transforms
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader
import torch.nn as nn
import torch.optim as optim
# data_dir = "/content/drive/MyDrive/ROI_project_slot4/roi_dataset_4" # 학습데이터 폴더 경로
data_dir = "/content/drive/MyDrive/ROI_project_slot6/roi_dataset_6"
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ColorJitter(brightness=0.2, contrast=0.2),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])])

train_dataset = ImageFolder(root=f"{data_dir}/train", transform=transform)
val_dataset   = ImageFolder(root=f"{data_dir}/val", transform=transform)

train_loader = DataLoader(train_dataset, batch_size=16, shuffle=True)
val_loader   = DataLoader(val_dataset, batch_size=16, shuffle=False)

print(train_dataset.classes)  # ['NG', 'OK']
from torchvision.models import resnet18

model = resnet18(pretrained=True)
model.fc = nn.Linear(model.fc.in_features, 2)  # OK / NG

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-4)

epochs = 20

for epoch in range(epochs):
    model.train()
    running_loss = 0

    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

    print(f"Epoch [{epoch+1}/{epochs}] Loss: {running_loss/len(train_loader):.4f}")
# torch.save(model.state_dict(), "/content/drive/MyDrive/ROI_project_slot4/slot4_joint_classifier.pt")

torch.save(model.state_dict(), "/content/drive/MyDrive/ROI_project_slot6/slot6_joint_classifier.pt")`
        },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553609/colab_2_iyyvua.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553947/4good_w8lxvm.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553936/4bad_ktvrkn.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767554124/6good_lxzkvg.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767553957/6bad_kangdr.png" },
      ],
      sections: [
        {
          title: "비전2: ResNet18 기반 정밀 결착 분석",
          description: [
            "ROI 이미지 데이터를 활용한 2차 정밀 품질 분류 시스템",
            "사전 학습된 ResNet18 모델을 이용한 전이 학습(Transfer Learning) 적용",
            "PyTorch 기반 학습 파이프라인 (Augmentation → Training → Saving)",
            "최종 결착 상태(OK/NG)를 이미지 분석을 통해 고정밀 판별"
          ],
        },
      ],
    },
  ],
};

