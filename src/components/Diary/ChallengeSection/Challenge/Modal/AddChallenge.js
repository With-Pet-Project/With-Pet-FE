import './AddChallenge.scss';
import styled from 'styled-components';

import { useState } from 'react';
import { useModalController } from '../context/modalController';
import ModalWrapper from './ModalWrapper';

import DateSelector from './DateSelector';

const Button = styled.button`
  width: 90px;
  height: 36px;
  border: 1.5px solid #62ccab;
  border-radius: 10px;
  margin: 0 7px;
`;

function AddChallenge() {
  const [title, setTtitle] = useState('');
  const { isOpenAddChallenge } = useModalController();

  const handleTitleChange = e => {
    if (e.target.value.length <= 10) {
      setTtitle(e.target.value);
    }
  };

  return (
    <ModalWrapper>
      <div className="add-Challenge">
        <div className="add-Challenge-header">
          <h1>챌린지 추가하기</h1>
          <p>달성할 챌린지를 추가해주세요.</p>
        </div>
        <div className="add-Challenge-detail">
          <div className="add-Challenge-period">
            <h2>기간</h2>
            <DateSelector />
            <div className="period-select" />
          </div>
          <div className="add-Challenge-title">
            <h2>타이틀</h2>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="10자 이내로 입력하세요"
            />
          </div>
        </div>
        <div className="add-Challenge-buttons">
          <Button onClick={isOpenAddChallenge}>취소</Button>
          <Button>추가하기</Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default AddChallenge;
