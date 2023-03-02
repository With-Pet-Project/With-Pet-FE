import content from '../../../../../lib/assets/images/landing/section/section03/image_02.png';

function SpecialNote() {
  return (
    <article className="landing-third-section-article">
      <h2>오늘의 기록</h2>
      <p>오늘의 기록기능을 통하여 반려견과의 추억 저장</p>
      <div>
        <img src={content} alt="오늘의 기록 이미지" />
      </div>
    </article>
  );
}

export default SpecialNote;
