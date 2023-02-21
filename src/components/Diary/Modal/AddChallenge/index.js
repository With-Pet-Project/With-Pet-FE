import './AddChallenge.scss';

import { useState, useEffect } from 'react';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import ModalButtons from '../ModalButtons';

import DateSelector from './DateSelector';

function AddChallenge() {
  const MAXIMUM_NUMBER_OF_TIMES = 10;

  const [times, setTimes] = useState([]);
  const [currentTimes, setCurrentTimes] = useState(0);
  const [title, setTtitle] = useState('');

  const handleTitleChange = e => {
    if (e.target.value.length <= 10) {
      setTtitle(e.target.value);
    }
  };

  const handleTimesChange = e => {
    setCurrentTimes(e.target.value);
  };

  useEffect(() => {
    const tmp = [];
    for (let i = 1; i <= MAXIMUM_NUMBER_OF_TIMES; i++) {
      tmp.push(i);
    }

    setTimes([...tmp]);
  }, []);

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
          />
        </div>
        <div className="add-Challenge-period">
          <h2>날짜</h2>
          <DateSelector />
          <div className="period-select" />
        </div>
      </div>
      <div className="add_Challenge-times">
        <h2>횟수</h2>
        <div className="times-select">
          <select
            value={currentTimes}
            id="times-select"
            onChange={handleTimesChange}
          >
            {times.map(t => (
              <option key={t} value={t}>
                주 {t}회 달성
              </option>
            ))}
          </select>
          <DownArrow htmlFor="times-select" />
        </div>
      </div>
      <ModalButtons Component={AddChallenge} />
    </div>
  );
}

export default AddChallenge;
