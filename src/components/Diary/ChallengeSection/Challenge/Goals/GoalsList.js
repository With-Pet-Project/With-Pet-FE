import './GoalsList.scss';
import styled from 'styled-components';
import goals from 'lib/mocks/goals.json';

import Goal from './Goal';

const GoalItem = styled.li`
  height: ${({ isInModal }) => (isInModal ? 'none' : '30%')};
`;

function GoalsList({ isInModal = false }) {
  return (
    <div className="Goals-List">
      <ul>
        {goals &&
          !isInModal &&
          goals.slice(0, 3).map(goal => {
            return (
              <GoalItem key={goal.id}>
                <Goal goal={goal} />
              </GoalItem>
            );
          })}
        {goals &&
          isInModal &&
          goals.map(goal => {
            return (
              <GoalItem key={goal.id} isInModal={isInModal}>
                <Goal goal={goal} isInModal />
              </GoalItem>
            );
          })}
      </ul>
    </div>
  );
}

export default GoalsList;
