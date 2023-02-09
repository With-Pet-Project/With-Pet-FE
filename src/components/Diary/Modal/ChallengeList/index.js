import './ChallengeList.scss';

import { useModalController } from 'components/Diary/ChallengeSection/Challenge/context/modalController';
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
      </div>
    </ModalWrapper>
  );
}

export default ChallengeList;
