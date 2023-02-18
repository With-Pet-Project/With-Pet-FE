import './Goal.scss';
import styled from 'styled-components';

import CheckBox from './CheckBox,';
import ThreeHorizontalDots from './ThreeHorizontalDots';

const GoalItem = styled.div`
  padding-left: ${({ isInModal }) => (isInModal ? '20px' : '0')};
  background: ${({ isInModal, percent }) =>
    isInModal
      ? `linear-gradient(to right, $backgroundYellow ${percent}%, #fff ${percent}%)`
      : '#fff'};
`;

function Goal({ goal, isInModal = false }) {
  const percent = 0.25;
  return (
    <GoalItem
      className="goal-item"
      isInModal={isInModal}
      percent={percent * 100}
    >
      {!isInModal && <CheckBox goal={goal} />}
      <div className="goal-item-title">
        <h2>{goal.title}</h2>
        <p>주 {goal.target_cnt}회 달성 목표</p>
      </div>
      <ThreeHorizontalDots />
    </GoalItem>
  );
}

export default Goal;
