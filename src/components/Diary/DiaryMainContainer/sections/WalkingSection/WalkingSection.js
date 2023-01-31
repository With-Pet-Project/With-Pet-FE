import './WalkingSection.scss';

function WalkingSection() {
  return (
    <section className="diary-section diary-section-Padding">
      <div className="right-section-text-box">
        <h2>산책 통계</h2>
        <p>이번달 반려견과 산책한 총 킬로미터는?</p>
        <em>6.3 km</em>
      </div>
      <div className="right-section-circle-img" />
    </section>
  );
}

export default WalkingSection;
