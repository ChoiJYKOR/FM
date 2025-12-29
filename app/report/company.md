# About FM - Company Tab
## 회사 소개 페이지 콘텐츠

---

## 섹션 구성

### 1️⃣ 히어로 섹션 (Hero Section)
### 2️⃣ 미션과 비전
### 3️⃣ 핵심 가치
### 4️⃣ 회사 역사 타임라인
### 5️⃣ 조직 구조 (팀 소개)
### 6️⃣ 글로벌 입지
### 7️⃣ 파트너십 및 성과
### 8️⃣ 채용 및 문의

---

## HTML/Markdown 구현 예시

### 1️⃣ 히어로 섹션

```html
<section class="hero-company">
  <div class="hero-content">
    <h1>FM: Crafting Safety, Securing Tomorrow</h1>
    <p class="subtitle">산업용 퓨즈 솔루션의 글로벌 리더</p>
    <div class="hero-stats">
      <div class="stat">
        <h3>10+</h3>
        <p>Years of Excellence</p>
      </div>
      <div class="stat">
        <h3>3</h3>
        <p>Major Partners (현대·기아·제네시스)</p>
      </div>
      <div class="stat">
        <h3>99.5%</h3>
        <p>Quality Accuracy</p>
      </div>
    </div>
  </div>
  <div class="hero-image">
    [배경 이미지: 공장, 기술, 혁신 관련 이미지]
  </div>
</section>

<style>
.hero-company {
  background: linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%);
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.hero-content h1 {
  font-size: 48px;
  color: #D3212F;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.hero-content .subtitle {
  font-size: 24px;
  color: #666666;
  margin-bottom: 40px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.stat h3 {
  font-size: 36px;
  color: #D3212F;
  margin-bottom: 8px;
}

.stat p {
  font-size: 14px;
  color: #999999;
}
</style>
```

---

### 2️⃣ 미션과 비전

```html
<section class="mission-vision">
  <div class="container">
    <h2>Our Mission & Vision</h2>
    
    <div class="mission-vision-grid">
      <!-- 미션 -->
      <div class="card mission">
        <div class="icon">🎯</div>
        <h3>Mission</h3>
        <p>
          <strong>"안전과 신뢰성을 통해 미래를 설계한다"</strong>
        </p>
        <ul>
          <li>✓ 최고 품질의 퓨즈 솔루션 제공</li>
          <li>✓ 산업 안전 기준 초과 달성</li>
          <li>✓ 글로벌 자동차 제조사와 협력</li>
          <li>✓ 지속 가능한 생산 프로세스 운영</li>
        </ul>
      </div>
      
      <!-- 비전 -->
      <div class="card vision">
        <div class="icon">🔮</div>
        <h3>Vision</h3>
        <p>
          <strong>"AI 기반 검사 기술으로 제조업을 혁신하다"</strong>
        </p>
        <ul>
          <li>✓ 2030년 글로벌 톱 5 기업 진입</li>
          <li>✓ EV 시장 성장에 따른 수익 3배 증가</li>
          <li>✓ AI 비전 검사 기술 업계 표준화</li>
          <li>✓ 아시아 태평양 지역 최강 기업 지위 확보</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
.mission-vision {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.mission-vision h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  padding: 40px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
  background-color: #F9F9F9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card .icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.card h3 {
  font-size: 24px;
  color: #D3212F;
  margin-bottom: 16px;
}

.card p {
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card ul li {
  font-size: 14px;
  color: #666666;
  margin-bottom: 12px;
  line-height: 1.6;
}
</style>
```

---

### 3️⃣ 핵심 가치

```html
<section class="core-values">
  <div class="container">
    <h2>Our Core Values</h2>
    <p class="subtitle">FM을 이끄는 5가지 핵심 가치</p>
    
    <div class="values-grid">
      <div class="value-card">
        <div class="value-number">1</div>
        <h3>Safety First</h3>
        <p>
          제품의 안전성을 최우선으로 합니다.
          모든 설계, 제조, 검사 단계에서 
          최고 수준의 안전 기준을 준수합니다.
        </p>
      </div>
      
      <div class="value-card">
        <div class="value-number">2</div>
        <h3>Innovation</h3>
        <p>
          YOLO + ROI + CNN 기반 AI 비전 검사 기술로
          산업을 혁신합니다. R&D 투자 8~10%를
          지속적으로 확대하고 있습니다.
        </p>
      </div>
      
      <div class="value-card">
        <div class="value-number">3</div>
        <h3>Reliability</h3>
        <p>
          99.5% 이상의 검사 정확도로 
          고객의 신뢰를 얻습니다.
          글로벌 자동차 제조사 3사와의 
          장기 계약이 증명합니다.
        </p>
      </div>
      
      <div class="value-card">
        <div class="value-number">4</div>
        <h3>Sustainability</h3>
        <p>
          친환경 제조 프로세스와 
          SF6-Free 정책으로 미래 세대를 위한
          책임감 있는 기업 활동을 합니다.
        </p>
      </div>
      
      <div class="value-card">
        <div class="value-number">5</div>
        <h3>Partnership</h3>
        <p>
          고객, 파트너, 직원과의 신뢰 기반 
          협력을 통해 함께 성장합니다.
          배터리 안전 Task Force 주도적 참여.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
.core-values {
  padding: 80px 40px;
  background: linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%);
}

.core-values h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.core-values .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
  font-size: 16px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

.value-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  border-top: 3px solid #D3212F;
  transition: box-shadow 0.3s ease;
}

.value-card:hover {
  box-shadow: 0 8px 20px rgba(211, 33, 47, 0.15);
}

.value-number {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #D3212F;
  color: white;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.value-card h3 {
  font-size: 20px;
  color: #D3212F;
  margin-bottom: 12px;
}

.value-card p {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
}
</style>
```

---

### 4️⃣ 회사 역사 타임라인

```html
<section class="company-timeline">
  <div class="container">
    <h2>Our Journey</h2>
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2015</div>
        <div class="timeline-content">
          <h3>FM 설립</h3>
          <p>산업용 퓨즈 솔루션 개발 시작</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">2018</div>
        <div class="timeline-content">
          <h3>현대·기아 계약 체결</h3>
          <p>글로벌 완성차 제조사와 첫 계약</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">2021</div>
        <div class="timeline-content">
          <h3>Genesis 공급 시작</h3>
          <p>프리미엄 브랜드 안전 퓨즈 공급</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">2023</div>
        <div class="timeline-content">
          <h3>배터리 안전 Task Force 참여</h3>
          <p>EV 안전 부품 시장 리더 포지셔닝</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">2024</div>
        <div class="timeline-content">
          <h3>AI 비전 검사 기술 완성</h3>
          <p>YOLO + ROI + CNN 기반 검사 시스템 상용화</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">2025~</div>
        <div class="timeline-content">
          <h3>글로벌 톱 5 진입 목표</h3>
          <p>Multi-Modal AI, Edge AI 기술 개발</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.company-timeline {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.company-timeline h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 60px;
  font-weight: bold;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-color: #E0E0E0;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }
}

.timeline-item {
  margin-bottom: 40px;
  display: flex;
  gap: 40px;
}

@media (max-width: 768px) {
  .timeline-item {
    margin-left: 40px;
    gap: 20px;
  }
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .timeline-item:nth-child(even) {
    flex-direction: row;
  }
}

.timeline-date {
  width: 80px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #D3212F;
  padding-top: 10px;
}

.timeline-date::after {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background-color: #D3212F;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
}

.timeline-content {
  flex: 1;
  background: #F9F9F9;
  padding: 20px;
  border-radius: 8px;
  border-left: 3px solid #D3212F;
}

.timeline-content h3 {
  font-size: 18px;
  color: #D3212F;
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 14px;
  color: #666666;
}
</style>
```

---

### 5️⃣ 조직 구조 (팀 소개)

```html
<section class="organization">
  <div class="container">
    <h2>Our Team</h2>
    <p class="subtitle">FM을 이끄는 전문가들</p>
    
    <div class="org-structure">
      <div class="org-member">
        <div class="avatar" style="background: #D3212F;"></div>
        <h3>경영 & 사업개발</h3>
        <p>
          글로벌 OEM 계약 및 
          전략적 파트너십 관리
        </p>
      </div>
      
      <div class="org-member">
        <div class="avatar" style="background: #4D4D4D;"></div>
        <h3>R&D & 기술개발</h3>
        <p>
          AI 비전 검사 기술,
          스마트 퓨즈 혁신
        </p>
      </div>
      
      <div class="org-member">
        <div class="avatar" style="background: #999999;"></div>
        <h3>생산 & 품질관리</h3>
        <p>
          99.5% 정확도 검사 시스템 운영,
          공정 최적화
        </p>
      </div>
      
      <div class="org-member">
        <div class="avatar" style="background: #333333;"></div>
        <h3>마케팅 & 브랜드</h3>
        <p>
          글로벌 브랜드 정체성 구축,
          시장 커뮤니케이션
        </p>
      </div>
    </div>
    
    <div class="team-stats">
      <div class="stat">
        <h3>100+</h3>
        <p>Employees</p>
      </div>
      <div class="stat">
        <h3>5</h3>
        <p>Technical Teams</p>
      </div>
      <div class="stat">
        <h3>3</h3>
        <p>R&D Centers</p>
      </div>
    </div>
  </div>
</section>

<style>
.organization {
  padding: 80px 40px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%);
}

.organization h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.organization .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.org-structure {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

@media (max-width: 768px) {
  .org-structure {
    grid-template-columns: repeat(2, 1fr);
  }
}

.org-member {
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 16px;
}

.org-member h3 {
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;
}

.org-member p {
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
}

.team-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  border-top: 2px solid #E0E0E0;
  padding-top: 40px;
}

.team-stats .stat h3 {
  font-size: 32px;
  color: #D3212F;
  margin-bottom: 8px;
}

.team-stats .stat p {
  font-size: 14px;
  color: #999999;
}
</style>
```

---

### 6️⃣ 글로벌 입지

```html
<section class="global-presence">
  <div class="container">
    <h2>Global Presence</h2>
    
    <div class="presence-content">
      <div class="presence-text">
        <h3>아시아 태평양 지역 최강</h3>
        <ul>
          <li>
            <strong>한국:</strong> 본사 (부산), R&D 센터
          </li>
          <li>
            <strong>주요 거래선:</strong> 
            현대 자동차, 기아 자동차, Genesis
          </li>
          <li>
            <strong>시장 점유율:</strong>
            아시아 태평양 EV 퓨즈 시장 3.2% (2030년 목표: 4.5%)
          </li>
          <li>
            <strong>글로벌 전개:</strong>
            유럽, 북미 OEM 신규 진입 준비 중
          </li>
        </ul>
        
        <div class="global-targets">
          <h4>2030년 글로벌 톱 5 진입 전략</h4>
          <div class="target-grid">
            <div class="target">
              <p>📊 시장점유율</p>
              <p class="target-value">4.5%</p>
            </div>
            <div class="target">
              <p>💰 수익 목표</p>
              <p class="target-value">USD 225M</p>
            </div>
            <div class="target">
              <p>🔍 검사 정확도</p>
              <p class="target-value">99.8%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="presence-map">
        [지도 이미지 또는 시각화]
        <div class="map-legend">
          <div class="legend-item">🔴 주요 거래선 (현대·기아·Genesis)</div>
          <div class="legend-item">🟡 확대 목표 시장</div>
          <div class="legend-item">⚪ 미래 진출 지역</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.global-presence {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.global-presence h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}

.presence-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

@media (max-width: 768px) {
  .presence-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.presence-text h3 {
  font-size: 24px;
  color: #D3212F;
  margin-bottom: 20px;
}

.presence-text ul {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.presence-text ul li {
  font-size: 15px;
  color: #333333;
  margin-bottom: 12px;
  line-height: 1.6;
}

.global-targets {
  background: #F9F9F9;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
}

.global-targets h4 {
  font-size: 16px;
  color: #000000;
  margin-bottom: 16px;
}

.target-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.target {
  text-align: center;
}

.target p {
  font-size: 13px;
  color: #666666;
  margin: 0 0 8px 0;
}

.target-value {
  font-size: 20px !important;
  color: #D3212F !important;
  font-weight: bold !important;
}

.presence-map {
  background: #F0F0F0;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.map-legend {
  margin-top: 20px;
  text-align: left;
}

.legend-item {
  font-size: 14px;
  color: #666666;
  margin: 8px 0;
}
</style>
```

---

### 7️⃣ 파트너십 및 성과

```html
<section class="partnerships-achievements">
  <div class="container">
    <h2>Partnerships & Achievements</h2>
    
    <div class="partners-grid">
      <div class="partner-card">
        <div class="partner-logo" style="background: #D3212F;">
          <p>현대자동차</p>
        </div>
        <h3>Hyundai Motor</h3>
        <p>글로벌 완성차 제조 1위</p>
        <p class="status">✓ 계약 체결 (2018년~)</p>
      </div>
      
      <div class="partner-card">
        <div class="partner-logo" style="background: #4D4D4D;">
          <p>기아자동차</p>
        </div>
        <h3>Kia Motors</h3>
        <p>글로벌 EV 시장 성장 주도</p>
        <p class="status">✓ 계약 체결 (2018년~)</p>
      </div>
      
      <div class="partner-card">
        <div class="partner-logo" style="background: #999999;">
          <p>제네시스</p>
        </div>
        <h3>Genesis</h3>
        <p>프리미엄 브랜드 안전 표준</p>
        <p class="status">✓ 공급 진행 (2021년~)</p>
      </div>
    </div>
    
    <div class="achievements">
      <h3>2024년 주요 성과</h3>
      <div class="achievement-list">
        <div class="achievement-item">
          <span class="achievement-icon">🏆</span>
          <div class="achievement-text">
            <h4>AI 비전 검사 시스템 상용화</h4>
            <p>YOLO + ROI + CNN 기술로 99.5% 검사 정확도 달성</p>
          </div>
        </div>
        
        <div class="achievement-item">
          <span class="achievement-icon">📈</span>
          <div class="achievement-text">
            <h4>생산량 증가</h4>
            <p>월 처리량 300배 증가 (시간당 120개 → 36,000개)</p>
          </div>
        </div>
        
        <div class="achievement-item">
          <span class="achievement-icon">🌍</span>
          <div class="achievement-text">
            <h4>EV 시장 리더십</h4>
            <p>배터리 안전 Task Force 주도적 참여</p>
          </div>
        </div>
        
        <div class="achievement-item">
          <span class="achievement-icon">💡</span>
          <div class="achievement-text">
            <h4>기술 혁신</h4>
            <p>AI 기반 스마트 퓨즈 3건 이상 특허 출원</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.partnerships-achievements {
  padding: 80px 40px;
  background: linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%);
}

.partnerships-achievements h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto 60px;
}

@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}

.partner-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  border: 1px solid #E0E0E0;
  transition: box-shadow 0.3s ease;
}

.partner-card:hover {
  box-shadow: 0 10px 25px rgba(211, 33, 47, 0.1);
}

.partner-logo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
}

.partner-card h3 {
  font-size: 18px;
  color: #000000;
  margin-bottom: 8px;
}

.partner-card p {
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
}

.partner-card .status {
  color: #D3212F;
  font-weight: bold;
}

.achievements {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  border-left: 4px solid #D3212F;
}

.achievements h3 {
  font-size: 24px;
  color: #D3212F;
  margin-bottom: 30px;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .achievement-list {
    grid-template-columns: 1fr;
  }
}

.achievement-item {
  display: flex;
  gap: 16px;
}

.achievement-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.achievement-text h4 {
  font-size: 16px;
  color: #000000;
  margin: 0 0 6px 0;
}

.achievement-text p {
  font-size: 14px;
  color: #666666;
  margin: 0;
}
</style>
```

---

### 8️⃣ 채용 및 문의

```html
<section class="careers-contact">
  <div class="container">
    <h2>Join FM</h2>
    <p class="subtitle">함께 미래를 만드는 인재를 찾습니다</p>
    
    <div class="careers-content">
      <div class="career-card">
        <h3>AI/ML 엔지니어</h3>
        <p>YOLO, CNN 모델 개발 및 최적화</p>
        <ul>
          <li>Python, TensorFlow/PyTorch 경험</li>
          <li>컴퓨터 비전 프로젝트 경험</li>
          <li>박사 또는 경력 5년 이상</li>
        </ul>
        <a href="#" class="apply-btn">지원하기</a>
      </div>
      
      <div class="career-card">
        <h3>산업 자동화 엔지니어</h3>
        <p>PLC, MQTT 기반 자동화 시스템 개발</p>
        <ul>
          <li>PLC 프로그래밍 경험</li>
          <li>Arduino/임베디드 시스템</li>
          <li>공장 자동화 프로젝트 경험</li>
        </ul>
        <a href="#" class="apply-btn">지원하기</a>
      </div>
      
      <div class="career-card">
        <h3>제품 엔지니어</h3>
        <p>퓨즈 제품 설계 및 개발</p>
        <ul>
          <li>전자/전기 공학 전공</li>
          <li>자동차 부품 경험 우대</li>
          <li>TOEIC 700점 이상</li>
        </ul>
        <a href="#" class="apply-btn">지원하기</a>
      </div>
    </div>
    
    <div class="contact-section">
      <h3>문의하기</h3>
      <div class="contact-info">
        <p>📍 주소: 부산광역시 남구 (본사)</p>
        <p>📞 전화: [연락처]</p>
        <p>📧 이메일: hr@fm.com / info@fm.com</p>
        <p>🌐 웹사이트: www.fm-safety.com</p>
      </div>
    </div>
  </div>
</section>

<style>
.careers-contact {
  padding: 80px 40px;
  background-color: #FFFFFF;
}

.careers-contact h2 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.careers-contact .subtitle {
  text-align: center;
  color: #999999;
  margin-bottom: 50px;
}

.careers-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

@media (max-width: 768px) {
  .careers-content {
    grid-template-columns: 1fr;
  }
}

.career-card {
  background: #F9F9F9;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 30px;
  transition: border-color 0.3s ease;
}

.career-card:hover {
  border-color: #D3212F;
}

.career-card h3 {
  font-size: 18px;
  color: #D3212F;
  margin-bottom: 8px;
}

.career-card > p {
  font-size: 14px;
  color: #666666;
  margin-bottom: 16px;
}

.career-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.career-card ul li {
  font-size: 13px;
  color: #666666;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
}

.career-card ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #D3212F;
  font-weight: bold;
}

.apply-btn {
  display: inline-block;
  background-color: #D3212F;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.apply-btn:hover {
  background-color: #B01A26;
}

.contact-section {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background: #F0F0F0;
  border-radius: 8px;
}

.contact-section h3 {
  font-size: 24px;
  color: #D3212F;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 15px;
  color: #333333;
  margin-bottom: 10px;
}
</style>
```

---

## 최종 구성 요약

| 섹션 | 내용 | 스타일 |
|------|------|--------|
| **히어로** | 미션 선언, 주요 통계 | 큰 텍스트, Red 강조 |
| **미션/비전** | 2개 카드 (각 4개 포인트) | 좌우 배치, 호버 효과 |
| **핵심가치** | 5가지 값 (5개 카드) | 3열 그리드 + 반응형 |
| **타임라인** | 6개 이정표 (2015~2025+) | 세로 타임라인 |
| **조직** | 4개 팀 + 통계 | 아이콘 + 정보 |
| **글로벌** | 한국 기반, 글로벌 확대 | 지도 + 통계 |
| **파트너/성과** | 3개 파트너 + 4개 성과 | 카드 + 리스트 |
| **채용/문의** | 3개 직무 + 연락처 | CTA 버튼 + 정보 |

---

## 색상 규칙 적용

```
주색: #D3212F (FM Red) - 제목, 강조, 버튼
배경: #FFFFFF, #F9F9F9, #F0F0F0 (그라데이션)
텍스트: #000000 (제목), #333333 (본문), #666666 (부연)
강조: #999999 (보조정보), #4D4D4D (진한 텍스트)
```

---

## 반응형 디자인 포함

모든 섹션은 `@media (max-width: 768px)`로 모바일 최적화됨

---

이 콘텐츠는 우리의 전체 대화를 바탕으로:
- ✅ FM의 미션, 비전, 가치 통합
- ✅ 기술 혁신(AI 비전 검사) 강조
- ✅ 파트너십(현대·기아·Genesis) 하이라이트
- ✅ 성과 및 미래 목표 제시
- ✅ 채용 및 문의 정보 포함

Website에 바로 적용 가능한 **Company 탭 완성 콘텐츠**입니다! 🚀