import dogRice from 'lib/assets/images/diary/image_05.png';

import { useHealthInfo } from '../hooks/useHealthInfo';

function WeightSection() {
  const { avgWeight } = useHealthInfo();

  return (
    <section className="diary-section diary-section-Padding">
      <div className="average-section-text-box">
        <h2 className="section-title">평균 몸무게</h2>
        <p>이번달 반려견의 평균 기록 몸무게는?</p>
        <em>
          <b>{avgWeight || 0}</b>
          <span>kg</span>
        </em>
      </div>
      <div className="circle-img">
        <img src={dogRice} alt="평균 몸무게" />
      </div>
    </section>
  );
}

export default WeightSection;
