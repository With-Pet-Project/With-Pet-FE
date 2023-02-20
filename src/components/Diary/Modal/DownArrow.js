import styled from 'styled-components';

const LabelWrapper = styled.div`
  width: 100%;
  text-align: right;

  & label {
    display: block;
    margin: -25px 12px 25px 0;
  }
`;

function DownArrow({ htmlFor }) {
  return (
    <LabelWrapper>
      <label htmlFor={htmlFor}>
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14.1777"
            y="1.9314"
            width="9.6"
            height="1.6"
            rx="0.8"
            transform="rotate(135 14.1777 1.9314)"
            fill="#252525"
          />
          <rect
            x="1.73242"
            y="0.800049"
            width="9.6"
            height="1.6"
            rx="0.8"
            transform="rotate(45 1.73242 0.800049)"
            fill="#252525"
          />
        </svg>
      </label>
    </LabelWrapper>
  );
}

export default DownArrow;
