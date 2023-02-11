import './ChallengeList.scss';
import AchievementRate from 'components/Diary/ChallengeSection/Challenge/AchievementRate/AchievementRate';
import GoalsList from 'components/Diary/ChallengeSection/Challenge/Goals/GoalsList';
import WeekSelector from './WeekSelector';

function ChallengeList() {
  return (
    <div className="Challenge-List">
      <div className="Challenge-List-title">
        <h1>챌린지 목록</h1>
        <WeekSelector />
      </div>
      <AchievementRate />
      <GoalsList isInModal />
    </div>
  );
}

export default ChallengeList;
