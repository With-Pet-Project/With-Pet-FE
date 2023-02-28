import './GoalsList.scss';
import styled from 'styled-components';
import goals from 'lib/mocks/goals.json';

import { useChallenge } from '../../hooks/useChallenge';

import Goal from './Goal';

const GoalItem = styled.li`
  height: ${({ isInModal }) => (isInModal ? 'none' : '30%')};
`;

function GoalsList({ isInModal = false }) {
  const { isLoading, isError, error, challenges } = useChallenge();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return <div>Sorry. The server is unstable. Error: {error} </div>;
  }

  return (
    <div className="Goals-List">
      <ul>
        {challenges?.data?.data?.challenges &&
          !isInModal &&
          challenges?.data?.data?.challenges.slice(0, 3).map(goal => {
            return (
              <GoalItem key={goal.id}>
                <Goal goal={goal} />
              </GoalItem>
            );
          })}
        {challenges?.data?.data?.challenges &&
          isInModal &&
          challenges?.data?.data?.challenges.map(goal => {
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
