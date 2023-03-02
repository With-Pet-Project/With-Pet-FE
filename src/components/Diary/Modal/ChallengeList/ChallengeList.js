import './ChallengeList.scss';
import { useState } from 'react';

import AchievementRate from 'components/Diary/ChallengeSection/Challenge/AchievementRate/AchievementRate';
import GoalsList from 'components/Diary/ChallengeSection/Challenge/Goals/GoalsList';
import { useWeeklyChallenge } from 'components/Diary/hooks/useWeeklyChallenge';

import WeekSelector from './WeekSelector';

function ChallengeList() {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [week, setWeek] = useState(1);
  const { weekly } = useWeeklyChallenge(
    Number(year),
    Number(month + 1),
    Number(week),
  );
  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };

  const handleChangeWeek = e => {
    setWeek(e.target.value);
  };

  return (
    <div className="Challenge-List">
      <div className="Challenge-List-title">
        <h1>챌린지 목록</h1>
        <WeekSelector
          year={year}
          month={month}
          week={week}
          handleChangeMonth={handleChangeMonth}
          handleChangeWeek={handleChangeWeek}
        />
      </div>
      <AchievementRate queryData={weekly} />
      <GoalsList isInModal queryData={weekly} />
    </div>
  );
}

export default ChallengeList;
