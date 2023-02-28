import './Button.scss';
import { forwardRef } from 'react';

const Button = forwardRef(({ petIdx, petInfoList, isOpen }, ref) => {
  return (
    <button
      type="button"
      className="pet-profile-list"
      ref={ref}
      onClick={isOpen}
      disabled={petInfoList.length === 0}
    >
      <div className="pet-name-birthday">
        <h2>
          {petInfoList?.length ? petInfoList[petIdx].name : '반려동물 없음'}
        </h2>
        <span>
          {petInfoList?.length
            ? `${petInfoList[petIdx].birthday.split('-')[0]}년 ${
                petInfoList[petIdx].birthday.split('-')[1]
              }월 ${petInfoList[petIdx].birthday.split('-')[2]}일 - ${
                new Date().getFullYear() -
                Number(petInfoList[petIdx].birthday.split('-')[0])
              }세`
            : '반려동물 없음'}
        </span>
      </div>
      <span className="pet-profile-list-arrow">
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
      </span>
    </button>
  );
});

export default Button;
