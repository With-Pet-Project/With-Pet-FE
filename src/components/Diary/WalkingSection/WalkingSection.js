import dog from 'lib/assets/images/diary/image_02.png';
import { useHealthInfo } from '../hooks/useHealthInfo';

function WalkingSection() {
  const { avgWalkDist } = useHealthInfo();

  return (
    <section className="diary-section diary-section-Padding">
      <div className="average-section-text-box">
        <h2 className="section-title">산책 통계</h2>
        <p>이번달 반려견과 산책한 총 킬로미터는?</p>
        <em>
          <b>{avgWalkDist}</b> <span>km</span>
        </em>
      </div>
      <div className="circle-img">
        <img src={dog} alt="산책 평균" />
      </div>
    </section>
  );
}

export default WalkingSection;
