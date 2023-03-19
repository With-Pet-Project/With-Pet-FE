import content from '../../../../lib/assets/images/landing/section/section03/image_03.png';

function WeightWalk() {
  return (
    <article className="landing-third-section-article">
      <h2>산책 및 몸무게 통계</h2>
      <p>통계 기능을 통한 반려견의 산책, 몸무게 통계 파악</p>
      <div>
        <img src={content} alt="산책 및 몸무게 통계 이미지" />
      </div>
    </article>
  );
}

export default WeightWalk;
