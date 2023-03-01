import './Goal.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import CheckBox from './CheckBox,';
import ThreeHorizontalDots from './ThreeHorizontalDots';

const GoalItem = styled.div`
  padding-left: ${({ isInModal }) => (isInModal ? '20px' : '0')};
  background: ${({ isInModal, percent }) =>
    isInModal
      ? `linear-gradient(to right, ${vars.backgroundYellow} ${percent}%, #fff ${percent}%)`
      : '#fff'};
`;

function Goal({ goal, isInModal = false }) {
  const percent = goal.achieveCnt / goal.targetCnt;
  return (
    <GoalItem
      className="goal-item"
      isInModal={isInModal}
      percent={percent * 100}
    >
      {!isInModal && <CheckBox goal={goal} />}
      <div className="goal-item-title">
        <h2>{goal.title}</h2>
        <p>
          {goal.achieveCnt} / {goal.targetCnt}
        </p>
      </div>
      <ThreeHorizontalDots />
    </GoalItem>
  );
}

export default Goal;
