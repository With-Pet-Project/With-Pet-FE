import './Challenge.scss';

import AddChallenge from 'components/Diary/Modal/AddChallenge';
import ChallengeList from 'components/Diary/Modal/ChallengeList';
import { useModal } from 'components/common/Modal/context/useModal';

import AchievementRate from './AchievementRate/AchievementRate';
import GoalsList from './Goals/GoalsList';

function Challenge() {
  const { openModal } = useModal();

  const openAddChallenge = () => {
    openModal(AddChallenge);
  };

  const openChallengeList = () => {
    openModal(ChallengeList);
  };

  return (
    <div className="Challenge">
      <div className="Challenge-title">
        <div>
          <h2>챌린지</h2>
          <p>챌린지를 추가하고 달성해보세요 !</p>
        </div>
        <button type="button" onClick={openAddChallenge}>
          추가하기
        </button>
      </div>
      <AchievementRate />
      <GoalsList />
      <div className="Challenge-modal-Button">
        <button type="button" onClick={openChallengeList}>
          <span>챌린지 목록</span>
        </button>
      </div>
    </div>
  );
}

export default Challenge;
