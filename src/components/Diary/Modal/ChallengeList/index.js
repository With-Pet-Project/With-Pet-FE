import './ChallengeList.scss';
import { useModalController } from 'components/Diary/ChallengeSection/Challenge/context/modalController';
import AchievementRate from 'components/Diary/ChallengeSection/Challenge/AchievementRate/AchievementRate';
import GoalsList from 'components/Diary/ChallengeSection/Challenge/Goals/GoalsList';
import ModalWrapper from '../ModalWrapper';
import WeekSelector from './WeekSelector';

function ChallengeList() {
  const { isOpenChallengeList } = useModalController();

  return (
    <ModalWrapper>
      <div className="Challenge-List">
        <div className="Challenge-List-title">
          <h1>챌린지 목록</h1>
          <WeekSelector />
        </div>
        <AchievementRate />
        <GoalsList isInModal />
      </div>
    </ModalWrapper>
  );
}

export default ChallengeList;
