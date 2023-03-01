import './EditChallenge.scss';
import { useModal } from 'components/common/Modal/context/useModal';
import { useState } from 'react';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import { useEditChallenge } from 'components/Diary/hooks/useEditChallenge';
import ModalButtons from '../ModalButtons';

function EditChallenge({ challengeId }) {
  const times = [1, 2, 3, 4, 5, 6, 7];

  const [targetCnt, setTargetCnt] = useState(1);
  const [title, setTtitle] = useState('');

  // title, targetCnt, challengeId
  const editChallenge = useEditChallenge();

  const handleTitleChange = e => {
    if (e.target.value.length <= 10) {
      setTtitle(e.target.value);
    }
  };

  const handleTimesChange = e => {
    setTargetCnt(e.target.value);
  };

  return (
    <div className="edit-challenge">
      <div className="edit-challenge-header">
        <h2>챌린지 편집</h2>
        <p>챌린지를 편집해주세요.</p>
      </div>
      <div className="edit-challenge-body">
        <div className="edit-challenge-input">
          <h3>타이틀</h3>
          <input
            type="text"
            placeholder="10자 이내로 입력해주세요"
            value={title}
            onChange={handleTitleChange}
            maxLength={10}
          />
        </div>
        <div className="edit-challenge-select">
          <h3>횟수</h3>
          <select
            id="edit-times-selector"
            value={targetCnt}
            onChange={handleTimesChange}
          >
            {times.map(t => (
              <option key={t} value={t}>
                {t}회
              </option>
            ))}
          </select>
          <DownArrow htmlFor="edit-times-selector" />
        </div>
      </div>
      <ModalButtons
        Component={EditChallenge}
        disabled={title.length === 0}
        mutate={() => editChallenge.mutate({ title, targetCnt, challengeId })}
      />
    </div>
  );
}

export default EditChallenge;
