function PetInfo() {
  const a = 'a';
  const b = 1;
  return (
    <div className="pet-info">
      <div className="pet-profile-img" />
      <div className="pet-name-birthday">
        <h2>우리집 강아지</h2>
        <span>2020년 01월 01일 - 3세</span>
      </div>
      <div className="pet-profile-mini-img" />
    </div>
  );
}

export default PetInfo;
