import './Challenge.scss';

import AddChallenge from 'components/Diary/Modal/AddChallenge/AddChallenge';
import ChallengeList from 'components/Diary/Modal/ChallengeList/ChallengeList';
import { useModal } from 'components/common/Modal/context/useModal';

import { useDailyChallenge } from 'components/Diary/hooks/useDailyChallenge';
import { Suspense } from 'react';
import Loading from 'components/common/Loading/Loading';
import AchievementRate from './AchievementRate/AchievementRate';
import GoalsList from './Goals/GoalsList';

function Challenge() {
  const { openModal } = useModal();
  const { daily } = useDailyChallenge();

  const openAddChallenge = () => {
    openModal(AddChallenge);
  };

  const openChallengeList = () => {
    openModal(ChallengeList);
  };

  return (
    <Suspense fallback={<Loading />}>
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
        <AchievementRate queryData={daily} />
        <GoalsList isInModal={false} queryData={daily} />
        <div className="Challenge-modal-Button">
          <button type="button" onClick={openChallengeList}>
            <span>챌린지 목록</span>
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default Challenge;
