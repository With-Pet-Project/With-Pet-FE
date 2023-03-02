import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { forwardRef } from 'react';

import Option from './Option';

const Button = styled.div`
  width: 38px;
  height: 38px;
  margin: 0 20px 0 auto;

  & button {
    width: 100%;
    height: 100%;
    display: flex;
    color: ${vars.backgroundYellow};
    border: 1px solid #dbdbdb;
    background-color: #fff;
    border-radius: 10px;
  }

  & span {
    flex-basis: 100%;
    align-items: center;
    line-height: 28px;
    font-size: 12px;
    font-weight: 900;
  }
`;

const ThreeHorizontalDots = forwardRef(({ open, isOpen, goal }, ref) => {
  return (
    <Button ref={ref}>
      <button type="button" onClick={isOpen}>
        <span>. . .</span>
      </button>
      {open && <Option goal={goal} />}
    </Button>
  );
});

export default ThreeHorizontalDots;
