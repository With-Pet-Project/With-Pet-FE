import './GoalsList.scss';
import styled from 'styled-components';
import goals from 'lib/mocks/goals.json';

import Goal from './Goal';

const GoalItem = styled.li`
  height: ${({ isInModal }) => (isInModal ? '20%' : '30%')};
`;

function GoalsList({ isInModal = false, queryData }) {
  return (
    <div className="Goals-List">
      <ul>
        {queryData &&
          (queryData.length > 0 ? (
            queryData?.map(c => (
              <GoalItem key={c.title} isInModal={isInModal}>
                <Goal isInModal={isInModal} goal={c} />
              </GoalItem>
            ))
          ) : (
            <GoalItem>
              <span>챌린지가 없습니다.</span>
            </GoalItem>
          ))}
      </ul>
    </div>
  );
}

export default GoalsList;
