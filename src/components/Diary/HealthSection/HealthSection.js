/* eslint-disable no-unused-expressions */
import './HealthSection.scss';

import walkImg from 'lib/assets/images/diary/image_01.png';
import weightImg from 'lib/assets/images/diary/image_00.png';
import drinkImg from 'lib/assets/images/diary/image_04.png';
import feedImg from 'lib/assets/images/diary/image_05.png';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import HealthContent from './HealthContent';
import { useHealthInfo } from '../hooks/useHealthInfo';
import { useAddHealthInfo } from '../hooks/useAddHealthInfo';
import { useEditHealthInfo } from '../hooks/useEditHealthInfo';
import { usePetById } from '../hooks/usePetById';

const EditButton = styled.button`
  color: ${({ edit }) => (edit ? '$backgroundYellow' : '#000')};
`;

function HealthSection() {
  const { dayInfo, avgWeight } = useHealthInfo();
  const addHealthInfo = useAddHealthInfo();
  const editHealthInfo = useEditHealthInfo();
  const petInfo = usePetById();

  const [edit, setEdit] = useState(false);
  const [walk, setWalk] = useState();
  const [weight, setWeight] = useState();
  const [drink, setDrink] = useState();
  const [feed, setFeed] = useState();

  const isEdit = () => {
    if (edit) {
      !dayInfo
        ? addHealthInfo.mutate({
            walkDistance: walk,
            weight,
            drinkAmount: drink,
            feedAmount: feed,
            diary: '',
          })
        : editHealthInfo.mutate({
            ...dayInfo,
            id: dayInfo.id,
            walkDistance: walk,
            weight,
            drinkAmount: drink,
            feedAmount: feed,
            diary: dayInfo.diary,
          });
    }

    setEdit(!edit);
  };

  const handleWalk = e => setWalk(parseFloat(e.target.value).toFixed(2));
  const handleWeight = e => setWeight(parseFloat(e.target.value).toFixed(2));
  const handleDrink = e => setDrink(parseFloat(e.target.value).toFixed(2));
  const handleFeed = e => setFeed(parseFloat(e.target.value).toFixed(2));

  useEffect(() => {
    setWalk(dayInfo ? dayInfo.walkDistance : 0);
    setWeight(dayInfo ? dayInfo.weight : 0);
    setDrink(dayInfo ? dayInfo.drinkAmount : 0);
    setFeed(dayInfo ? dayInfo.feedAmount : 0);
  }, [dayInfo]);

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
          value={walk}
          unit="km"
          edit={edit}
          onChange={handleWalk}
          imgUrl={walkImg}
        />
        <HealthContent
          category="몸무게"
          text="오늘의 몸무게는"
          value={weight}
          unit="kg"
          edit={edit}
          onChange={handleWeight}
          imgUrl={weightImg}
        />
        <HealthContent
          category="음수량"
          text="오늘의 음수량은"
          value={dayInfo ? dayInfo.drinkAmount : 0}
          unit="ml"
          edit={edit}
          onChange={handleDrink}
          imgUrl={drinkImg}
        />
        <HealthContent
          category="사료/간식"
          text="오늘의 급여량은"
          value={dayInfo ? dayInfo.feedAmount : 0}
          unit="g"
          edit={edit}
          onChange={handleFeed}
          imgUrl={feedImg}
        />
      </div>
    </section>
  );
}

export default HealthSection;
