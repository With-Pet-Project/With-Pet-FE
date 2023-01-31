import './CenterSection.scss';

function CenterSection() {
  return (
    <section className="diary-center-section">
      <article className="diary-calendar" />
      <article className="diary-challenge">
        <div>
          <h2>챌린지</h2>
          <p>챌린지를 추가하여 반려견의 건강을 챙겨주세요 !</p>
          <button type="button">추가하기</button>
        </div>
      </article>
    </section>
  );
}

export default CenterSection;
