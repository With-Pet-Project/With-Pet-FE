import './GoalsList.scss';
import goals from 'lib/mocks/goals.json';

import Goal from './Goal';

function GoalsList() {
  return (
    <div className="Goals-List">
      <ul>
        {goals &&
          goals.map((goal, idx) => {
            if (idx <= 2) {
              return (
                <li>
                  <Goal goal={goal} key={goal.id} />
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}

export default GoalsList;
