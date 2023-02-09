import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  color: #62ccab;
  width: 38px;
  height: 38px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 20px 0 auto;

  & span {
    flex-basis: 100%;
    align-items: center;
    line-height: 28px;
    font-size: 12px;
    font-weight: 900;
  }
`;

function ThreeHorizontalDots() {
  return (
    <Button>
      <span>. . .</span>
    </Button>
  );
}

export default ThreeHorizontalDots;