import './GoalsList.scss';
import styled from 'styled-components';
import goals from 'lib/mocks/goals.json';

import { useChallenge } from 'components/Diary/hooks/useChallenge';

import Goal from './Goal';

const GoalItem = styled.li`
  height: ${({ isInModal }) => (isInModal ? 'none' : '30%')};
`;

function GoalsList({ isInModal = false }) {
  const { daily } = useChallenge();

  return (
    <div className="Goals-List">
      <ul>
        {isInModal && (
          <li>
            <span>ㅇㅇㅇ</span>
          </li>
        )}
        {!isInModal && daily?.length > 0 ? (
          daily.map(c => (
            <GoalItem key={c.challengId}>
              <Goal isInModal={isInModal} goal={c} />
            </GoalItem>
          ))
        ) : (
          <GoalItem>
            <span>챌린지가 없습니다.</span>
          </GoalItem>
        )}
      </ul>
    </div>
  );
}

export default GoalsList;
