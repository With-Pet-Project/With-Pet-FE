import './Goal.scss';
import styled from 'styled-components';

import CheckBox from './CheckBox,';
import ThreeHorizontalDots from './ThreeHorizontalDots';

function Goal({ goal }) {
  return (
    <div className="goal-item">
      <CheckBox goal={goal} />
      <div className="goal-item-title">
        <h2>{goal.title}</h2>
        <p>주 {goal.times}회 달성 목표</p>
      </div>
      <ThreeHorizontalDots />
    </div>
  );
}

export default Goal;
