import './SpecialNoteSection.scss';

function SpecialNoteSection() {
  return (
    <section className="SpecialNote diary-section-Padding">
      <div>
        <h2>오늘의 기록</h2>
        <button type="button">
          <span>편집</span>
        </button>
      </div>
      <div className="SpecialNote-textArea" />
    </section>
  );
}

export default SpecialNoteSection;
