import './index.scss';
import content from '../../../../../lib/assets/images/landing/section/section03/image_00.png';

function Challenge() {
  return (
    <article className="landing-third-section-Challenge">
      <h2>반려견을 위한 챌린지</h2>
      <p>자체 챌린지등록 기능을 통한 반려견 건강 관리</p>
      <div className="landing-third-section-Challenge-img">
        <img src={content} alt="챌린지" />
      </div>
    </article>
  );
}

export default Challenge;
