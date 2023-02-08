import './GoalsList.scss';
import goals from 'lib/mocks/goals.json';

import Goal from './Goal';

function GoalsList() {
  return (
    <div className="Goals-List">
      <ul>
        {goals &&
          goals.slice(0, 3).map(goal => {
            return (
              <li key={goal.id}>
                <Goal goal={goal} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default GoalsList;
