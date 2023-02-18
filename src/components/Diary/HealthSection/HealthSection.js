import './HealthSection.scss';

import styled from 'styled-components';
import { useState } from 'react';
import HealthContent from './HealthContent';

const EditButton = styled.button`
  color: ${({ edit }) => (edit ? '$backgroundYellow' : '#000')};
`;

function HealthSection() {
  const [edit, setEdit] = useState(false);

  const isEdit = () => setEdit(!edit);

  return (
    <section className="Health-section diary-section-Padding">
      <div>
        <h2>건강 기록</h2>
        <EditButton type="button" onClick={isEdit} edit={edit}>
          {!edit ? <span>편집</span> : <span>저장</span>}
        </EditButton>
      </div>
      <p>반려견의 건강 상태를 기록해주세요 !</p>
      <div className="Health-content-container">
        <HealthContent
          category="산책기록"
          text="오늘의 산책량은"
          value="1.2"
          unit="km"
          edit={edit}
        />
        <HealthContent
          category="몸무게"
          text="오늘의 몸무게는"
          value="3.6"
          unit="kg"
          edit={edit}
        />
        <HealthContent
          category="음수량"
          text="오늘의 음수량은"
          value="400"
          unit="ml"
          edit={edit}
        />
        <HealthContent
          category="사료/간식"
          text="오늘의 급여량은"
          value="300"
          unit="g"
          edit={edit}
        />
      </div>
    </section>
  );
}

export default HealthSection;
