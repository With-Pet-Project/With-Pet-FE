import './Goal.scss';
import styled from 'styled-components';

import { useState } from 'react';

const CheckBox = styled.label`
  border: 1px solid ${({ check }) => (check ? '#62ccab' : '#dbdbdb')};
  background-color: ${({ check }) => (check ? '#62ccab' : '#FFFFFF')};
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  margin-top: -15px;
`;

function Goal({ goal }) {
  const [checked, setChecked] = useState(false);

  const isChecked = () => setChecked(!checked);

  return (
    <div className="goal-item">
      <CheckBox htmlFor={goal.id} className="goal-checkBox" check={checked}>
        <input type="checkbox" id={goal.id} onClick={isChecked} />
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </CheckBox>
      <div className="goal-item-title">
        <h2>{goal.title}</h2>
        <p>주 {goal.times}회 달성 목표</p>
      </div>
      <div className="three-horizontal-dots">
        <span>. . .</span>
      </div>
    </div>
  );
}

export default Goal;
