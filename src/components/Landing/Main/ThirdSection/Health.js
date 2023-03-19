import content from '../../../../lib/assets/images/landing/section/section03/image_01.png';

function Health() {
  return (
    <article className="landing-third-section-article">
      <h2>일일 건강기록 기능</h2>
      <p>산책기록, 몸무게, 음수량, 사료 등 건강기록</p>
      <div className="landing-third-section-Health-img">
        <img src={content} alt="firstWindow" />
      </div>
    </article>
  );
}

export default Health;
