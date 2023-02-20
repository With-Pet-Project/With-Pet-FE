import dog from 'lib/assets/아카이브/강아지이미지/icon_00.png';

function PetInfo() {
  return (
    <div className="pet-info">
      <div className="pet-profile-img">
        <img src={dog} alt="강아지이미지" />
      </div>
      <div className="pet-name-birthday">
        <h2>우리집 강아지</h2>
        <span>2020년 01월 01일 - 3세</span>
      </div>
      <button type="button" className="pet-profile-mini-img">
        <svg
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="16.9709"
            y="1.41425"
            width="12"
            height="2"
            rx="1"
            transform="rotate(135 16.9709 1.41425)"
            fill="#252525"
          />
          <rect
            x="1.41431"
            width="12"
            height="2"
            rx="1"
            transform="rotate(45 1.41431 0)"
            fill="#252525"
          />
        </svg>
      </button>
    </div>
  );
}

export default PetInfo;
