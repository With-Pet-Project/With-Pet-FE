import './AddChallenge.scss';

import { useAddChallenge } from 'components/Diary/hooks/useAddChallenge';
import { useState, useEffect } from 'react';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import ModalButtons from '../ModalButtons';

function AddChallenge() {
  const times = [1, 2, 3, 4, 5, 6, 7];
  const { mutate } = useAddChallenge();

  const [targetCnt, setTargetCnt] = useState(1);
  const [title, setTtitle] = useState('');

  const addChallenge = () => mutate({ title, targetCnt });

  const handleTitleChange = e => {
    if (e.target.value.length <= 10) {
      setTtitle(e.target.value);
    }
  };

  const handleTimesChange = e => {
    setTargetCnt(e.target.value);
  };

  return (
    <div className="add-Challenge">
      <div className="add-Challenge-header">
        <h1>챌린지 추가하기</h1>
        <p>달성할 챌린지를 추가해주세요.</p>
      </div>
      <div className="add-Challenge-detail">
        <div className="add-Challenge-title">
          <h2>타이틀</h2>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="10자 이내로 입력하세요"
            maxLength={10}
          />
        </div>
      </div>
      <div className="add_Challenge-times">
        <h2>횟수</h2>
        <div className="times-select">
          <select
            id="times-select"
            value={targetCnt}
            onChange={handleTimesChange}
          >
            {times.map(t => (
              <option key={t} value={t}>
                {t}회
              </option>
            ))}
          </select>
          <DownArrow htmlFor="times-select" />
        </div>
      </div>
      <ModalButtons
        Component={AddChallenge}
        disabled={title.length === 0}
        mutate={addChallenge}
      />
    </div>
  );
}

export default AddChallenge;
