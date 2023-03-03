import './HealthSection.scss';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import HealthContent from './HealthContent';
import { useHealthInfo } from '../hooks/useHealthInfo';
import { useAddHealthInfo } from '../hooks/useAddHealthInfo';

const EditButton = styled.button`
  color: ${({ edit }) => (edit ? '$backgroundYellow' : '#000')};
`;

function HealthSection() {
  const data = useHealthInfo();
  const addHealthInfo = useAddHealthInfo();

  const [edit, setEdit] = useState(false);
  const [walk, setWalk] = useState();
  const [weight, setWeight] = useState();
  const [drink, setDrink] = useState();
  const [feed, setFeed] = useState();

  const isEdit = () => {
    if (edit) {
      addHealthInfo.mutate({
        walkDistance: walk,
        weight,
        drinkAmount: drink,
        feedAmount: feed,
        diary: '',
      });
    }

    setEdit(!edit);
  };

  const handleWalk = e => setWalk(e.target.value);
  const handleWeight = e => setWeight(e.target.value);
  const handleDrink = e => setDrink(e.target.value);
  const handleFeed = e => setFeed(e.target.value);

  useEffect(() => {
    setWalk(data ? data.walkDistance : 0);
    setWeight(data ? data.weight : 0);
    setDrink(data ? data.drinkAmount : 0);
    setFeed(data ? data.feedAmount : 0);
  }, [data]);

  return (
    <section className="Health-section diary-section-Padding">
      <div>
        <h2 className="section-title">건강 기록</h2>
        <EditButton type="button" onClick={isEdit} edit={edit}>
          {!edit ? <span>편집</span> : <span>저장</span>}
        </EditButton>
      </div>
      <p>반려견의 건강 상태를 기록해주세요 !</p>
      <div className="Health-content-container">
        <HealthContent
          category="산책기록"
          text="오늘의 산책량은"
          value={data ? data.walkDistance : 0}
          unit="km"
          edit={edit}
          onChange={handleWalk}
        />
        <HealthContent
          category="몸무게"
          text="오늘의 몸무게는"
          value={data ? data.weight : 0}
          unit="kg"
          edit={edit}
          onChange={handleWeight}
        />
        <HealthContent
          category="음수량"
          text="오늘의 음수량은"
          value={data ? data.drinkAmount : 0}
          unit="ml"
          edit={edit}
          onChange={handleDrink}
        />
        <HealthContent
          category="사료/간식"
          text="오늘의 급여량은"
          value={data ? data.feedAmount : 0}
          unit="g"
          edit={edit}
          onChange={handleFeed}
        />
      </div>
    </section>
  );
}

export default HealthSection;
