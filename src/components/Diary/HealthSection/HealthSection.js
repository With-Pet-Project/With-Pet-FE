import './HealthSection.scss';

import HealthContent from './HealthContent';

function HealthSection() {
  return (
    <section className="diary-health-section diary-section-Padding">
      <div>
        <h2>건강 기록</h2>
        <button type="button">
          <span>편집</span>
        </button>
      </div>
      <p>반려견의 건강 상태를 기록해주세요 !</p>
      <div className="Health-content-container">
        <HealthContent
          category="산책기록"
          text="오늘의 산책량은"
          value="1.2"
          unit="km"
        />
        <HealthContent
          category="몸무게"
          text="오늘의 몸무게는"
          value="3.6"
          unit="kg"
        />
        <HealthContent
          category="음수량"
          text="오늘의 음수량은"
          value="400"
          unit="ml"
        />
        <HealthContent
          category="사료/간식"
          text="오늘의 급여량은"
          value="300g"
          unit="km"
        />
      </div>
    </section>
  );
}

export default HealthSection;
