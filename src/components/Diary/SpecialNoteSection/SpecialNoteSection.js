/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './SpecialNoteSection.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useState, useEffect } from 'react';
import { useHealthInfo } from '../hooks/useHealthInfo';
import { useAddHealthInfo } from '../hooks/useAddHealthInfo';
import { useEditHealthInfo } from '../hooks/useEditHealthInfo';

const EditButton = styled.button`
  color: ${({ edit }) => (edit ? '$backgroundYellow' : '#000 !important')};
`;

const TextArea = styled.textarea`
  background-color: ${({ edit }) => (edit ? '#fff' : '#f2f2f2')};
  padding: 5px;
  border: ${({ edit }) => (edit ? `1px solid ${vars.backgroundYellow}` : '0')};
`;

function SpecialNoteSection() {
  const { dayInfo } = useHealthInfo();
  const addHealthInfo = useAddHealthInfo();
  const editHealthInfo = useEditHealthInfo();
  const [edit, setEdit] = useState(false);
  const [diary, setDiary] = useState('');

  const handleDiary = e => setDiary(e.target.value);

  const isEdit = () => {
    if (edit) {
      !dayInfo
        ? addHealthInfo.mutate({
            walkDistance: 0,
            weight: 0,
            drinkAmount: 0,
            feedAmount: 0,
            diary,
          })
        : editHealthInfo.mutate({
            ...dayInfo,
            id: dayInfo.id,
            walkDistance: dayInfo.walkDistance,
            weight: dayInfo.weight,
            drinkAmount: dayInfo.drinkAmount,
            feedAmount: dayInfo.feedAmount,
            diary,
          });
    }

    setEdit(!edit);
  };

  useEffect(() => {
    setDiary(dayInfo?.diary || '');
  }, [dayInfo]);

  return (
    <section className="SpecialNote diary-section-Padding">
      <div>
        <h2 className="section-title">오늘의 기록</h2>
        <EditButton type="button" onClick={isEdit} edit={edit}>
          {!edit ? <span>편집</span> : <span>저장</span>}
        </EditButton>
      </div>
      <TextArea
        className="SpecialNote-textArea"
        disabled={!edit}
        edit={edit}
        value={diary}
        placeholder="오늘을 기록해주세요."
        onChange={handleDiary}
      />
    </section>
  );
}

export default SpecialNoteSection;
