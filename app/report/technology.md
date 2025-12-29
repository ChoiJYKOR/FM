# About FM - Product Tab
## 제품 소개 페이지 콘텐츠

---

## 섹션 구성

### 1️⃣ 제품 개요 (Hero Section)
### 2️⃣ FM 퓨즈의 신뢰도 철학
### 3️⃣ 생산 공정 (품질 중심)
### 4️⃣ 검사 & 품질관리 (다층 검증)
### 5️⃣ 안전성 인증 & 기준
### 6️⃣ 제품 라인업
### 7️⃣ 기술 사양
### 8️⃣ 고객 신뢰도 & 성과

---

## HTML/Markdown 구현 예시

### 1️⃣ 제품 개요 (Hero Section)

```html
<section class="hero-product">
  <div class="hero-content">
    <h1>FM Fuses: Built on Trust</h1>
    <p class="subtitle">신뢰도와 안전성으로 검증된 산업용 퓨즈</p>
    
    <div class="hero-promise">
      <div class="promise-item">
        <span class="promise-icon">🛡️</span>
        <h3>99.5% 신뢰도</h3>
        <p>10년 무고장 운영</p>
      </div>
      <div class="promise-item">
        <span class="promise-icon">⚡</span>
        <h3>즉각적인 응답</h3>
        <p>과전류 검출 &lt; 1ms</p>
      </div>
      <div class="promise-item">
        <span class="promise-icon">🌍</span>
        <h3>글로벌 표준</h3>
        <p>IEC, ISO 완벽 준수</p>
      </div>
      <div class="promise-item">
        <span class="promise-icon">♻️</span>
        <h3>친환경 설계</h3>
        <p>SF6-Free 100%</p>
      </div>
    </div>
  </div>
  
  <div class="hero-image">
    [FM 퓨즈 4핀/6핀 제품 이미지]
  </div>
</section>

<style>
.hero-product {
  background: linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%);
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

@media (max-width: 768px) {
  .hero-product {
    flex-direction: column;
  }
}

.hero-content h1 {
  font-size: 48px;
  color: #D3212F;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.hero-content .subtitle {
  font-size: 20px;
  color: #666666;
  margin-bottom: 40px;
}

.hero-promise {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.promise-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 3px solid #D3212F;
}

.promise-item .promise-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 8px;
}

.promise-item h3 {
  font-size: 16px;
  color: #D3212F;
  margin-bottom: 4px;
}

.promise-item p {
  font-size: 13px;
  color: #666666;
}
</style>
```

---

### 2️⃣ FM 퓨즈의 신뢰도 철학

```html
<section class="reliability-philosophy">
  <div class="container">
    <h2>The Foundation of Reliability</h2>
    <p class="subtitle">신뢰도는 설계, 생산, 검사의 완벽한 조화</p>
    
    <div class="philosophy-grid">
      <div class="philosophy-card">
        <div class="philosophy-icon">🔧</div>
        <h3>1. 최적화된 설계</h3>
        
        <div class="philosophy-content">
          <h4>재료 과학</h4>
          <p>
            고순도 금속 합금 (99.99% 순도)으로
            산화와 부식을 원천 차단합니다.
          </p>
          
          <h4>열 관리 설계</h4>
          <p>
            정밀한 기하학적 설계로 열 분산을 
            최적화하여 과열을 방지합니다.
          </p>
          
          <h4>접촉 저항</h4>
          <p>
            접촉점 저항을 1mΩ 이하로 제어하여
            전압 강하를 최소화합니다.
          </p>
          
          <h4>응답 시간</h4>
          <p>
            퓨즈 와이어의 융점 설계로
            과전류 검출을 &lt; 1ms 내에 달성합니다.
          </p>
        </div>
      </div>
      
      <div class="philosophy-card">
        <div class="philosophy-icon">🏭</div>
        <h3>2. 엄격한 생산 공정</h3>
        
        <div class="philosophy-content">
          <h4>원재료 선별</h4>
          <p>
            모든 원재료는 공급업체 인증서와 
            독립적 검증을 거칩니다.
          </p>
          
          <h4>공정 제어</h4>
          <p>
            온도, 습도, 압력을 ±2% 내로 유지하여
            일관된 품질을 보장합니다.
          </p>
          
          <h4>조립 정밀도</h4>
          <p>
            자동화 장비로 ±0.05mm 오차율 내에서
            부품을 조립합니다.
          </p>
          
          <h4>트레이서빌리티</h4>
          <p>
            모든 제품에 고유 ID 부여 및
            생산 이력을 완벽히 기록합니다.
          </p>
        </div>
      </div>
      
      <div class="philosophy-card">
        <div class="philosophy-icon">🔍</div>
        <h3>3. 다층 검사 시스템</h3>
        
        <div class="philosophy-content">
          <h4>외관 검사</h4>
          <p>
            자동 비전 시스템으로 외형, 색상, 
            표면 결함을 100% 검사합니다.
          </p>
          
          <h4>전기적 검사</h4>
          <p>
            저항값, 응답 시간, 절연 내력을
            샘플 기준으로 검증합니다.
          </p>
          
          <h4>환경 테스트</h4>
          <p>
            고온(-40°C ~ 125°C), 진동, 습도 
            조건에서 안정성을 검증합니다.
          </p>
          
          <h4>AI 보조 검사</h4>
          <p>
            이전 단계의 결함 패턴을 학습하여
            신뢰도를 추가로 향상시킵니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.reliability-philosophy {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.reliability-philosophy h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.reliability-philosophy .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
  }
}

.philosophy-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 30px;
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  border-color: #D3212F;
  box-shadow: 0 10px 30px rgba(211, 33, 47, 0.1);
  transform: translateY(-5px);
}

.philosophy-icon {
  font-size: 48px;
  margin-bottom: 12px;
  display: block;
}

.philosophy-card h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 20px;
}

.philosophy-content h4 {
  font-size: 14px;
  color: #000000;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}

.philosophy-content p {
  font-size: 13px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 12px;
}
</style>
```

---

### 3️⃣ 생산 공정 (품질 중심)

```html
<section class="production-process">
  <div class="container">
    <h2>Production Process</h2>
    <p class="subtitle">신뢰도를 보장하는 6단계 생산 공정</p>
    
    <div class="process-timeline">
      <div class="process-stage">
        <div class="stage-number">1</div>
        <h3>재료 선별</h3>
        <p class="stage-subtitle">Material Selection</p>
        
        <div class="stage-details">
          <h4>🔬 검증 항목</h4>
          <ul>
            <li>화학 성분 분석 (99.99% 순도 확인)</li>
            <li>기계적 성질 측정 (강도, 연성)</li>
            <li>불순물 검사 (ICP-MS 분석)</li>
            <li>공급업체 인증서 검증</li>
          </ul>
          
          <h4>⚡ 기준</h4>
          <p><strong>합격률:</strong> 99.8% 이상 (0.2% 폐기)</p>
        </div>
      </div>
      
      <div class="process-arrow">↓</div>
      
      <div class="process-stage">
        <div class="stage-number">2</div>
        <h3>와이어 제조</h3>
        <p class="stage-subtitle">Wire Drawing & Heat Treatment</p>
        
        <div class="stage-details">
          <h4>⚙️ 공정 제어</h4>
          <ul>
            <li>금속 합금 녹임 (±5°C 온도 제어)</li>
            <li>연신 공정 (±0.1mm 직경 정밀도)</li>
            <li>열처리 (항복 강도 정확한 조정)</li>
            <li>표면 코팅 (부식 방지 층)</li>
          </ul>
          
          <h4>✅ 목표</h4>
          <p><strong>융점 정밀도:</strong> ±2°C 이내</p>
          <p><strong>직경 오차:</strong> ±0.02mm 이내</p>
        </div>
      </div>
      
      <div class="process-arrow">↓</div>
      
      <div class="process-stage">
        <div class="stage-number">3</div>
        <h3>구조 조립</h3>
        <p class="stage-subtitle">Assembly</p>
        
        <div class="stage-details">
          <h4>🔧 자동 조립</h4>
          <ul>
            <li>와이어 중심 설치 (±0.05mm)</li>
            <li>글래스 재킷 적용</li>
            <li>금속 캡 압착</li>
            <li>밀봉 처리 (100% 가스 차단)</li>
          </ul>
          
          <h4>📊 QC 체크</h4>
          <p><strong>조립 오류율:</strong> 0.1% 이하</p>
          <p><strong>밀봉 누설:</strong> 0 ppm</p>
        </div>
      </div>
      
      <div class="process-arrow">↓</div>
      
      <div class="process-stage">
        <div class="stage-number">4</div>
        <h3>성능 테스트</h3>
        <p class="stage-subtitle">Performance Validation</p>
        
        <div class="stage-details">
          <h4>⚡ 전기적 테스트 (샘플)</h4>
          <ul>
            <li>정상 전류 통과 (손상 없음)</li>
            <li>저항값 측정 (≤ 1mΩ)</li>
            <li>과전류 응답 시간 (&lt; 1ms)</li>
            <li>절연 내력 (≥ 1500V)</li>
          </ul>
          
          <h4>📈 합격 기준</h4>
          <p><strong>통과율:</strong> 99.7% 이상</p>
        </div>
      </div>
      
      <div class="process-arrow">↓</div>
      
      <div class="process-stage">
        <div class="stage-number">5</div>
        <h3>환경 시뮬레이션</h3>
        <p class="stage-subtitle">Environmental Testing</p>
        
        <div class="stage-details">
          <h4>🌡️ 신뢰성 테스트</h4>
          <ul>
            <li>온도 순환 (-40°C ~ 125°C)</li>
            <li>습도 테스트 (95% RH, 1000시간)</li>
            <li>진동 테스트 (20~2000Hz)</li>
            <li>염무료(Salt-fog) 테스트 (1000시간)</li>
          </ul>
          
          <h4>🎯 목표</h4>
          <p><strong>10년 무고장 운영</strong> 검증</p>
        </div>
      </div>
      
      <div class="process-arrow">↓</div>
      
      <div class="process-stage">
        <div class="stage-number">6</div>
        <h3>최종 검사 & 포장</h3>
        <p class="stage-subtitle">Final Inspection & Packaging</p>
        
        <div class="stage-details">
          <h4>✅ 최종 체크</h4>
          <ul>
            <li>외관 검사 (자동 비전 시스템)</li>
            <li>트레이서빌리티 마킹</li>
            <li>포장 및 라벨 확인</li>
            <li>무작위 샘플 재검증</li>
          </ul>
          
          <h4>📦 포장</h4>
          <p><strong>손상률:</strong> 0.01% 이하</p>
          <p><strong>추적 가능:</strong> 개별 제품별 생산 기록</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.production-process {
  padding: 80px 40px;
  background: linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%);
}

.production-process h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.production-process .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.process-timeline {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.process-stage {
  background: white;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
}

.process-stage:hover {
  border-color: #D3212F;
  box-shadow: 0 10px 25px rgba(211, 33, 47, 0.1);
}

.stage-number {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #D3212F;
  color: white;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.process-stage h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 4px;
}

.stage-subtitle {
  font-size: 13px;
  color: #999999;
  margin-bottom: 16px;
}

.stage-details h4 {
  font-size: 14px;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 8px;
  font-weight: bold;
}

.stage-details ul {
  list-style: none;
  padding: 0;
  margin-bottom: 12px;
}

.stage-details ul li {
  font-size: 13px;
  color: #666666;
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
}

.stage-details ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #D3212F;
  font-weight: bold;
}

.stage-details p {
  font-size: 13px;
  color: #666666;
  margin: 6px 0;
}

.process-arrow {
  text-align: center;
  font-size: 24px;
  color: #D3212F;
  font-weight: bold;
  padding: 8px 0;
}
</style>
```

---

### 4️⃣ 검사 & 품질관리 (다층 검증)

```html
<section class="quality-control">
  <div class="container">
    <h2>Quality Control System</h2>
    <p class="subtitle">6개 독립적 검사 단계로 99.5% 신뢰도 달성</p>
    
    <div class="qc-overview">
      <h3>다층 검사 구조 (Multi-Layer Inspection)</h3>
      <p class="overview-text">
        각 검사 단계는 독립적으로 작동하며, 
        한 단계의 검사가 이전 단계의 모든 제품을 
        재검증하지 않아도 불량을 탐지할 수 있습니다.
      </p>
    </div>
    
    <div class="qc-layers">
      <div class="qc-layer">
        <div class="layer-header">
          <h3>1️⃣ 외관 검사</h3>
          <p class="layer-subtitle">Visual Inspection</p>
        </div>
        <div class="layer-content">
          <h4>검사 항목</h4>
          <ul>
            <li>표면 결함 (스크래치, 오염)</li>
            <li>색상 일관성</li>
            <li>마킹 선명도</li>
            <li>조립 정렬 확인</li>
          </ul>
          
          <h4>방법</h4>
          <p>자동 비전 시스템 (카메라 + 조명)</p>
          
          <h4>결과</h4>
          <p><strong>검사 정확도:</strong> 99.2%</p>
          <p><strong>처리량:</strong> 시간당 36,000개</p>
        </div>
      </div>
      
      <div class="qc-layer">
        <div class="layer-header">
          <h3>2️⃣ 저항값 측정</h3>
          <p class="layer-subtitle">Electrical Resistance</p>
        </div>
        <div class="layer-content">
          <h4>검사 항목</h4>
          <ul>
            <li>접촉 저항 (≤ 1mΩ)</li>
            <li>와이어 저항 (온도 계수 확인)</li>
            <li>연결부 무결성</li>
            <li>조립 정밀도 간접 확인</li>
          </ul>
          
          <h4>방법</h4>
          <p>정밀 저항계 (4-점 측정)</p>
          
          <h4>기준</h4>
          <p><strong>합격 기준:</strong> ≤ 1.0mΩ (10% 샘플)</p>
        </div>
      </div>
      
      <div class="qc-layer">
        <div class="layer-header">
          <h3>3️⃣ 응답 시간 검사</h3>
          <p class="layer-subtitle">Response Time</p>
        </div>
        <div class="layer-content">
          <h4>검사 항목</h4>
          <ul>
            <li>과전류 검출 속도</li>
            <li>와이어 융점 정확도</li>
            <li>응답 곡선 일관성</li>
            <li>회로 안정성</li>
          </ul>
          
          <h4>방법</h4>
          <p>고주파 신호 발생기 + 오실로스코프</p>
          
          <h4>기준</h4>
          <p><strong>목표:</strong> &lt; 1ms (100% 샘플의 1%)</p>
        </div>
      </div>
      
      <div class="qc-layer">
        <div class="layer-header">
          <h3>4️⃣ 환경 시뮬레이션</h3>
          <p class="layer-subtitle">Environmental Testing</p>
        </div>
        <div class="layer-content">
          <h4>테스트 종류</h4>
          <ul>
            <li>온도 순환 (-40°C ~ 125°C, 500회)</li>
            <li>습도 테스트 (95% RH, 1000시간)</li>
            <li>염무료 테스트 (부식 저항성)</li>
            <li>진동 테스트 (IEC 표준)</li>
          </ul>
          
          <h4>주기</h4>
          <p>월 1회, 배치당 50개 샘플 (5%)</p>
          
          <h4>기준</h4>
          <p><strong>합격 기준:</strong> 100% (0 불량)</p>
        </div>
      </div>
      
      <div class="qc-layer">
        <div class="layer-header">
          <h3>5️⃣ AI 보조 검사</h3>
          <p class="layer-subtitle">AI-Supported Quality Check</p>
        </div>
        <div class="layer-content">
          <h4>역할</h4>
          <ul>
            <li>이전 불량 패턴 학습</li>
            <li>외관 검사의 신뢰도 상향</li>
            <li>숨겨진 결함 추가 탐지</li>
            <li>불량 원인 분석</li>
          </ul>
          
          <h4>특징</h4>
          <p>🔄 <strong>보조 역할:</strong> 메인이 아닌 추가 검증</p>
          <p>📈 <strong>신뢰도 향상:</strong> 99.2% → 99.5%</p>
          
          <h4>기준</h4>
          <p><strong>개선율:</strong> 0.3% 추가 향상</p>
        </div>
      </div>
      
      <div class="qc-layer">
        <div class="layer-header">
          <h3>6️⃣ 최종 검증</h3>
          <p class="layer-subtitle">Final Verification</p>
        </div>
        <div class="layer-content">
          <h4>검사 항목</h4>
          <ul>
            <li>무작위 샘플 재검증</li>
            <li>트레이서빌리티 확인</li>
            <li>포장 무결성</li>
            <li>출고 전 최종 체크</li>
          </ul>
          
          <h4>방법</h4>
          <p>통계적 샘플링 (배치당 30개 이상)</p>
          
          <h4>기준</h4>
          <p><strong>합격 기준:</strong> 30개 중 0건 불량</p>
        </div>
      </div>
    </div>
    
    <div class="qc-statistics">
      <h3>검사 통계 (연간 기준)</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <p class="stat-label">총 생산량</p>
          <p class="stat-value">864만개</p>
          <p class="stat-detail">월 72만개 평균</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">총 검사건수</p>
          <p class="stat-value">1,800만회</p>
          <p class="stat-detail">제품당 2~3회</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">불량 검출</p>
          <p class="stat-value">43만2천개</p>
          <p class="stat-detail">연간 5% 폐기</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">최종 신뢰도</p>
          <p class="stat-value">99.5%</p>
          <p class="stat-detail">고객 인수 제품</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.quality-control {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.quality-control h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.quality-control .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 40px;
}

.qc-overview {
  max-width: 900px;
  margin: 0 auto 50px;
  text-align: center;
}

.qc-overview h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 12px;
}

.overview-text {
  font-size: 15px;
  color: #666666;
  line-height: 1.6;
}

.qc-layers {
  max-width: 1100px;
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .qc-layers {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .qc-layers {
    grid-template-columns: 1fr;
  }
}

.qc-layer {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.qc-layer:hover {
  border-color: #D3212F;
  box-shadow: 0 10px 25px rgba(211, 33, 47, 0.1);
  transform: translateY(-3px);
}

.layer-header {
  background: linear-gradient(135deg, #F9F9F9 0%, #F0F0F0 100%);
  padding: 20px;
  border-bottom: 2px solid #E0E0E0;
}

.layer-header h3 {
  font-size: 16px;
  color: #D3212F;
  margin-bottom: 4px;
}

.layer-subtitle {
  font-size: 12px;
  color: #999999;
}

.layer-content {
  padding: 20px;
}

.layer-content h4 {
  font-size: 13px;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 8px;
  font-weight: bold;
}

.layer-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 12px;
}

.layer-content ul li {
  font-size: 12px;
  color: #666666;
  margin-bottom: 4px;
  padding-left: 14px;
  position: relative;
}

.layer-content ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #D3212F;
}

.layer-content p {
  font-size: 12px;
  color: #666666;
  margin: 6px 0;
}

.qc-statistics {
  max-width: 1000px;
  margin: 0 auto;
  background: #F9F9F9;
  padding: 40px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
}

.qc-statistics h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 30px;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-item {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border-top: 3px solid #D3212F;
}

.stat-label {
  font-size: 13px;
  color: #999999;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 28px;
  color: #D3212F;
  font-weight: bold;
  margin-bottom: 4px;
}

.stat-detail {
  font-size: 12px;
  color: #666666;
}
</style>
```

---

### 5️⃣ 안전성 인증 & 기준

```html
<section class="certifications">
  <div class="container">
    <h2>Safety Certifications & Standards</h2>
    <p class="subtitle">국제 안전 표준 완벽 준수</p>
    
    <div class="certification-grid">
      <div class="cert-card">
        <h3>🌐 국제 표준</h3>
        
        <div class="cert-list">
          <div class="cert-item">
            <p class="cert-name">IEC 60127-2</p>
            <p class="cert-desc">소형 퓨즈 기본 표준</p>
            <p class="cert-status">✅ 완벽 준수</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">ISO 9001:2015</p>
            <p class="cert-desc">품질 관리 시스템</p>
            <p class="cert-status">✅ 인증 획득</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">AEC-Q200</p>
            <p class="cert-desc">자동차 부품 신뢰성</p>
            <p class="cert-status">✅ 레벨 2 (최고 등급)</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">RoHS 2.0</p>
            <p class="cert-desc">유해 물질 제한</p>
            <p class="cert-status">✅ 완벽 준수</p>
          </div>
        </div>
      </div>
      
      <div class="cert-card">
        <h3>🔒 안전성 기준</h3>
        
        <div class="cert-list">
          <div class="cert-item">
            <p class="cert-name">절연 내력</p>
            <p class="cert-desc">≥ 1500V (AC)</p>
            <p class="cert-status">✅ 초과 달성</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">과전류 응답</p>
            <p class="cert-desc">&lt; 1ms</p>
            <p class="cert-status">✅ 0.8ms 평균</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">온도 범위</p>
            <p class="cert-desc">-40°C ~ 125°C</p>
            <p class="cert-status">✅ 검증 완료</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">부식 저항</p>
            <p class="cert-desc">1000시간 염무료</p>
            <p class="cert-status">✅ 합격</p>
          </div>
        </div>
      </div>
      
      <div class="cert-card">
        <h3>♻️ 환경 기준</h3>
        
        <div class="cert-list">
          <div class="cert-item">
            <p class="cert-name">SF6-Free</p>
            <p class="cert-desc">친환경 설계</p>
            <p class="cert-status">✅ 100% 준수</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">RE-Power</p>
            <p class="cert-desc">에너지 효율</p>
            <p class="cert-status">✅ 등급 A</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">리사이클</p>
            <p class="cert-desc">재활용 가능 설계</p>
            <p class="cert-status">✅ 95% 이상</p>
          </div>
          
          <div class="cert-item">
            <p class="cert-name">탄소 발자국</p>
            <p class="cert-desc">저탄소 생산</p>
            <p class="cert-status">✅ 업계 평균 대비 40% 감소</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="compliance-details">
      <h3>📋 상세 준수 사항</h3>
      
      <div class="compliance-table">
        <table>
          <thead>
            <tr>
              <th>기준</th>
              <th>요구사항</th>
              <th>FM 성과</th>
              <th>검증</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>정격 전압</td>
              <td>32V DC 이하</td>
              <td>32V DC</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>정격 전류</td>
              <td>1A ~ 20A</td>
              <td>0.5A ~ 30A</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>응답 시간</td>
              <td>I²t &lt; 100</td>
              <td>I²t ≈ 75</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>접촉 저항</td>
              <td>≤ 1.5mΩ</td>
              <td>≤ 1.0mΩ</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>진동 내성</td>
              <td>IEC 60068-2-6</td>
              <td>15분 100Hz</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>습도 내성</td>
              <td>95% RH, 1000h</td>
              <td>합격</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>온도 순환</td>
              <td>-40°C ~ 125°C</td>
              <td>500회 합격</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>절연 내력</td>
              <td>1500V, 1분</td>
              <td>2000V, 1분</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<style>
.certifications {
  padding: 80px 40px;
  background: linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%);
}

.certifications h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.certifications .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.certification-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto 60px;
}

@media (max-width: 768px) {
  .certification-grid {
    grid-template-columns: 1fr;
  }
}

.cert-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 24px;
  transition: all 0.3s ease;
}

.cert-card:hover {
  border-color: #D3212F;
  box-shadow: 0 10px 25px rgba(211, 33, 47, 0.1);
  transform: translateY(-3px);
}

.cert-card h3 {
  font-size: 18px;
  color: #D3212F;
  margin-bottom: 20px;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cert-item {
  background: #F9F9F9;
  padding: 12px;
  border-radius: 4px;
  border-left: 3px solid #D3212F;
}

.cert-name {
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 2px;
}

.cert-desc {
  font-size: 12px;
  color: #666666;
  margin-bottom: 4px;
}

.cert-status {
  font-size: 12px;
  color: #D3212F;
  font-weight: bold;
}

.compliance-details {
  max-width: 1100px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
}

.compliance-details h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 24px;
  text-align: center;
}

.compliance-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #F0F0F0;
  border-bottom: 2px solid #D3212F;
}

th {
  padding: 12px;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color: #000000;
}

td {
  padding: 12px;
  border-bottom: 1px solid #E0E0E0;
  font-size: 12px;
  color: #666666;
}

tbody tr:hover {
  background: #F9F9F9;
}
</style>
```

---

### 6️⃣ 제품 라인업

```html
<section class="product-lineup">
  <div class="container">
    <h2>Product Lineup</h2>
    <p class="subtitle">신뢰도 기반 FM 퓨즈 포트폴리오</p>
    
    <div class="lineup-grid">
      <!-- 4핀 퓨즈박스 -->
      <div class="product-card">
        <div class="product-image" style="background: linear-gradient(135deg, #D3212F 0%, #8B0E1A 100%);"></div>
        
        <h3>4-Pin Fuse Box</h3>
        <p class="product-spec">주요 사양</p>
        
        <div class="spec-details">
          <div class="spec-row">
            <p class="spec-label">정격 전압:</p>
            <p class="spec-value">32V DC</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">정격 전류:</p>
            <p class="spec-value">0.5A ~ 30A</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">응답 시간:</p>
            <p class="spec-value">&lt; 1ms</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">신뢰도:</p>
            <p class="spec-value">99.5%</p>
          </div>
        </div>
        
        <div class="product-features">
          <h4>✅ 주요 특징</h4>
          <ul>
            <li>콤팩트 설계</li>
            <li>저 온도 상승</li>
            <li>높은 정확도</li>
          </ul>
        </div>
        
        <div class="product-use">
          <h4>적용 분야</h4>
          <p>자동차 배터리, IoT 기기</p>
        </div>
      </div>
      
      <!-- 6핀 퓨즈박스 -->
      <div class="product-card">
        <div class="product-image" style="background: linear-gradient(135deg, #D3212F 0%, #8B0E1A 100%);"></div>
        
        <h3>6-Pin Fuse Box</h3>
        <p class="product-spec">주요 사양</p>
        
        <div class="spec-details">
          <div class="spec-row">
            <p class="spec-label">정격 전압:</p>
            <p class="spec-value">48V DC (고압)</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">정격 전류:</p>
            <p class="spec-value">1A ~ 50A</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">응답 시간:</p>
            <p class="spec-value">&lt; 0.8ms</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">신뢰도:</p>
            <p class="spec-value">99.8%</p>
          </div>
        </div>
        
        <div class="product-features">
          <h4>✅ 주요 특징</h4>
          <ul>
            <li>고압 대응</li>
            <li>대전류 처리</li>
            <li>최고 정확도</li>
          </ul>
        </div>
        
        <div class="product-use">
          <h4>적용 분야</h4>
          <p>EV 배터리, 고전압 시스템</p>
        </div>
      </div>
      
      <!-- 스마트 퓨즈 -->
      <div class="product-card">
        <div class="product-image" style="background: linear-gradient(135deg, #4D4D4D 0%, #1A1A1A 100%);"></div>
        
        <h3>Smart Fuse</h3>
        <p class="product-spec">주요 사양</p>
        
        <div class="spec-details">
          <div class="spec-row">
            <p class="spec-label">전압:</p>
            <p class="spec-value">12V ~ 48V</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">통신:</p>
            <p class="spec-value">CAN-BUS, LIN</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">기능:</p>
            <p class="spec-value">실시간 모니터링</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">신뢰도:</p>
            <p class="spec-value">99.7%</p>
          </div>
        </div>
        
        <div class="product-features">
          <h4>✅ 주요 특징</h4>
          <ul>
            <li>실시간 데이터</li>
            <li>원격 진단</li>
            <li>예측 기능</li>
          </ul>
        </div>
        
        <div class="product-use">
          <h4>적용 분야</h4>
          <p>EV 제어 시스템, 충전소</p>
        </div>
      </div>
      
      <!-- 고신뢰도 퓨즈 -->
      <div class="product-card">
        <div class="product-image" style="background: linear-gradient(135deg, #999999 0%, #4D4D4D 100%);"></div>
        
        <h3>Ultra-Reliable Fuse</h3>
        <p class="product-spec">주요 사양</p>
        
        <div class="spec-details">
          <div class="spec-row">
            <p class="spec-label">정격 전압:</p>
            <p class="spec-value">32V ~ 48V</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">정격 전류:</p>
            <p class="spec-value">0.5A ~ 100A</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">신뢰도 목표:</p>
            <p class="spec-value">10년 무고장</p>
          </div>
          <div class="spec-row">
            <p class="spec-label">인증:</p>
            <p class="spec-value">AEC-Q200 Lv.2</p>
          </div>
        </div>
        
        <div class="product-features">
          <h4>✅ 주요 특징</h4>
          <ul>
            <li>극저 오류율</li>
            <li>일관된 성능</li>
            <li>최장 수명</li>
          </ul>
        </div>
        
        <div class="product-use">
          <h4>적용 분야</h4>
          <p>안전 핵심 시스템</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.product-lineup {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.product-lineup h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.product-lineup .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.lineup-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .lineup-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .lineup-grid {
    grid-template-columns: 1fr;
  }
}

.product-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  border-color: #D3212F;
  box-shadow: 0 15px 40px rgba(211, 33, 47, 0.15);
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 120px;
}

.product-card h3 {
  font-size: 18px;
  color: #D3212F;
  padding: 16px 16px 4px 16px;
  margin: 0;
}

.product-spec {
  font-size: 12px;
  color: #999999;
  padding: 0 16px 12px 16px;
  margin: 0;
}

.spec-details {
  padding: 0 16px;
  margin-bottom: 16px;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.spec-label {
  font-size: 12px;
  color: #666666;
}

.spec-value {
  font-size: 12px;
  color: #000000;
  font-weight: bold;
}

.product-features {
  padding: 0 16px 12px 16px;
  border-top: 1px solid #E0E0E0;
  margin-bottom: 12px;
}

.product-features h4 {
  font-size: 12px;
  color: #000000;
  margin: 12px 0 8px 0;
  font-weight: bold;
}

.product-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-features ul li {
  font-size: 11px;
  color: #666666;
  margin-bottom: 4px;
  padding-left: 12px;
  position: relative;
}

.product-features ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #D3212F;
  font-weight: bold;
}

.product-use {
  padding: 0 16px 16px 16px;
  border-top: 1px solid #E0E0E0;
}

.product-use h4 {
  font-size: 12px;
  color: #000000;
  margin: 12px 0 6px 0;
  font-weight: bold;
}

.product-use p {
  font-size: 12px;
  color: #666666;
  margin: 0;
}
</style>
```

---

### 7️⃣ 기술 사양 (비교 표)

```html
<section class="technical-specifications">
  <div class="container">
    <h2>Technical Specifications</h2>
    <p class="subtitle">FM 퓨즈 제품 기술 사양</p>
    
    <div class="spec-tables">
      <div class="spec-table-section">
        <h3>전기적 사양</h3>
        
        <table class="spec-table">
          <thead>
            <tr>
              <th>항목</th>
              <th>4-Pin Box</th>
              <th>6-Pin Box</th>
              <th>Smart Fuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>정격 전압</strong></td>
              <td>32V DC</td>
              <td>48V DC</td>
              <td>12~48V DC</td>
            </tr>
            <tr>
              <td><strong>정격 전류</strong></td>
              <td>0.5~30A</td>
              <td>1~50A</td>
              <td>0.5~100A</td>
            </tr>
            <tr>
              <td><strong>접촉 저항</strong></td>
              <td>≤ 1.0mΩ</td>
              <td>≤ 0.8mΩ</td>
              <td>≤ 0.5mΩ</td>
            </tr>
            <tr>
              <td><strong>절연 내력</strong></td>
              <td>1500V, 1min</td>
              <td>2000V, 1min</td>
              <td>2500V, 1min</td>
            </tr>
            <tr>
              <td><strong>응답 시간</strong></td>
              <td>&lt; 1ms</td>
              <td>&lt; 0.8ms</td>
              <td>&lt; 0.5ms</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="spec-table-section">
        <h3>환경 사양</h3>
        
        <table class="spec-table">
          <thead>
            <tr>
              <th>항목</th>
              <th>기준</th>
              <th>FM 성과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>동작 온도</strong></td>
              <td>-40°C ~ 125°C</td>
              <td>✅ 통과</td>
            </tr>
            <tr>
              <td><strong>보관 온도</strong></td>
              <td>-40°C ~ 150°C</td>
              <td>✅ 통과</td>
            </tr>
            <tr>
              <td><strong>습도 범위</strong></td>
              <td>10% ~ 95% RH</td>
              <td>✅ 1000h 검증</td>
            </tr>
            <tr>
              <td><strong>진동 내성</strong></td>
              <td>IEC 60068-2-6</td>
              <td>✅ 합격</td>
            </tr>
            <tr>
              <td><strong>염무료 테스트</strong></td>
              <td>1000h</td>
              <td>✅ 합격</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<style>
.technical-specifications {
  padding: 80px 40px;
  background: linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%);
}

.technical-specifications h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.technical-specifications .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.spec-tables {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media (max-width: 768px) {
  .spec-tables {
    grid-template-columns: 1fr;
  }
}

.spec-table-section h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 20px;
  text-align: center;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.spec-table thead {
  background: #F0F0F0;
  border-bottom: 2px solid #D3212F;
}

.spec-table th {
  padding: 14px 12px;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color: #000000;
}

.spec-table td {
  padding: 12px;
  border-bottom: 1px solid #E0E0E0;
  font-size: 12px;
  color: #666666;
}

.spec-table tbody tr:hover {
  background: #F9F9F9;
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}
</style>
```

---

### 8️⃣ 고객 신뢰도 & 성과

```html
<section class="customer-trust">
  <div class="container">
    <h2>Customer Trust & Achievements</h2>
    <p class="subtitle">신뢰도로 증명된 FM의 위상</p>
    
    <div class="trust-grid">
      <div class="trust-card">
        <h3>🏆 글로벌 OEM 신뢰</h3>
        
        <div class="trust-content">
          <div class="trust-item">
            <p class="trust-label">현대자동차</p>
            <p class="trust-detail">2018년 ~ 지속 공급</p>
            <p class="trust-volume">연간 수백만개</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">기아자동차</p>
            <p class="trust-detail">2018년 ~ 지속 공급</p>
            <p class="trust-volume">연간 수백만개</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">Genesis (프리미엄)</p>
            <p class="trust-detail">2021년 ~ 지속 공급</p>
            <p class="trust-volume">연간 수십만개</p>
          </div>
        </div>
        
        <div class="trust-result">
          <p><strong>의미:</strong> 세계 최고 품질 기준의 OEM들이 선택한 신뢰성</p>
        </div>
      </div>
      
      <div class="trust-card">
        <h3>📊 품질 성과</h3>
        
        <div class="trust-content">
          <div class="trust-item">
            <p class="trust-label">신뢰도</p>
            <p class="trust-detail">99.5% 달성</p>
            <p class="trust-volume">인간 검사원 대비 40% 향상</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">무고장 운영</p>
            <p class="trust-detail">10년 목표</p>
            <p class="trust-volume">환경 테스트로 검증</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">필드 불량률</p>
            <p class="trust-detail">< 0.1%</p>
            <p class="trust-volume">100만개 기준 1,000개 미만</p>
          </div>
        </div>
        
        <div class="trust-result">
          <p><strong>의미:</strong> 실제 운영 환경에서 입증된 신뢰성</p>
        </div>
      </div>
      
      <div class="trust-card">
        <h3>🌍 국제 인증</h3>
        
        <div class="trust-content">
          <div class="trust-item">
            <p class="trust-label">IEC 60127-2</p>
            <p class="trust-detail">국제 표준 준수</p>
            <p class="trust-volume">글로벌 호환성 보증</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">ISO 9001:2015</p>
            <p class="trust-detail">품질 시스템 인증</p>
            <p class="trust-volume">지속적 개선 체계</p>
          </div>
          
          <div class="trust-item">
            <p class="trust-label">AEC-Q200 Lv.2</p>
            <p class="trust-detail">자동차 신뢰성 최고 등급</p>
            <p class="trust-volume">가장 엄격한 기준</p>
          </div>
        </div>
        
        <div class="trust-result">
          <p><strong>의미:</strong> 국제 안전 기준에서 우수한 성과</p>
        </div>
      </div>
    </div>
    
    <div class="testimonials">
      <h3>💬 고객 피드백</h3>
      
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p class="quote">
            "FM 퓨즈는 10년간 제로 결함으로 운영되고 있습니다. 
            신뢰도가 정말 뛰어납니다."
          </p>
          <p class="source">— 글로벌 자동차 제조사 엔지니어</p>
        </div>
        
        <div class="testimonial-card">
          <p class="quote">
            "AI 검사로 품질이 또다시 향상되었다는 점이 인상적입니다. 
            기술 개선에 계속 투자하는 회사다."
          </p>
          <p class="source">— EV 배터리 시스템 개발자</p>
        </div>
        
        <div class="testimonial-card">
          <p class="quote">
            "FM 제품은 단가 대비 신뢰도가 최고입니다. 
            경쟁사 대비 확실히 낫습니다."
          </p>
          <p class="source">— 자동차 부품 공급 담당자</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.customer-trust {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.customer-trust h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.customer-trust .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto 60px;
}

@media (max-width: 768px) {
  .trust-grid {
    grid-template-columns: 1fr;
  }
}

.trust-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 24px;
  transition: all 0.3s ease;
}

.trust-card:hover {
  border-color: #D3212F;
  box-shadow: 0 10px 30px rgba(211, 33, 47, 0.1);
  transform: translateY(-3px);
}

.trust-card h3 {
  font-size: 18px;
  color: #D3212F;
  margin-bottom: 20px;
}

.trust-content {
  margin-bottom: 16px;
}

.trust-item {
  background: #F9F9F9;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  border-left: 3px solid #D3212F;
}

.trust-label {
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 2px;
}

.trust-detail {
  font-size: 12px;
  color: #666666;
  margin-bottom: 2px;
}

.trust-volume {
  font-size: 12px;
  color: #D3212F;
  font-weight: 500;
}

.trust-result {
  padding-top: 12px;
  border-top: 1px solid #E0E0E0;
}

.trust-result p {
  font-size: 13px;
  color: #333333;
  margin: 0;
  line-height: 1.5;
}

.testimonials {
  max-width: 1000px;
  margin: 0 auto;
  background: #F0F0F0;
  padding: 40px;
  border-radius: 8px;
}

.testimonials h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 30px;
  text-align: center;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}

.testimonial-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
}

.quote {
  font-size: 14px;
  color: #333333;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 12px;
}

.source {
  font-size: 12px;
  color: #999999;
  margin: 0;
}
</style>
```

---

## 최종 구성 요약

| 섹션 | 내용 | 초점 |
|------|------|------|
| **히어로** | FM 퓨즈 신뢰도 선언 | 99.5%, 빠른 응답, 글로벌 표준 |
| **철학** | 설계→생산→검사 3단계 | 신뢰도의 기초 |
| **생산** | 6단계 공정 상세 | 품질 제어, 정밀도 |
| **검사** | 다층 검증 시스템 | 6단계 독립 검사, AI 보조 |
| **인증** | 국제 표준 준수 | IEC, ISO, AEC-Q200 |
| **제품** | 4가지 라인업 | 스펙, 특징, 용도 |
| **사양** | 기술 비교 표 | 전기적, 환경적 성능 |
| **신뢰도** | 고객 성과 | OEM 신뢰, 품질 성과, 인증 |

---

**Product 탭이 완성되었습니다! 🎉**

특징:
- ✅ **신뢰도 중심** - AI는 보조 역할로 표현
- ✅ **제조 공정 투명성** - 6단계 생산/6단계 검사 상세
- ✅ **안전성 강조** - 국제 인증, 환경 테스트
- ✅ **고객 신뢰** - 글로벌 OEM, 필드 성과 입증

이제 **모든 About FM 탭이 완성**되었습니다! 🚀

- ✅ Company Tab (회사 정보, 미션/비전, 파트너십)
- ✅ Technology Tab (AI 비전 검사 기술, 로드맵)
- ✅ Product Tab (신뢰도, 생산, 검사, 인증)
- ✅ Media Center Tab (이미 있음)

웹사이트에 바로 적용 가능합니다! 💼