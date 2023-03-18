/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './SpecialNoteSection.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useState, useEffect } from 'react';
import { useHealthInfo } from '../hooks/useHealthInfo';
import { useAddDiary } from '../hooks/useAddDiary';
import { useDiary } from '../hooks/useDiary';
import { useEditHealthInfo } from '../hooks/useEditHealthInfo';
import { useEditDiary } from '../hooks/useEditDiary';

const EditButton = styled.button`
  color: ${({ edit }) =>
    edit ? `${vars.backgroundYellow}` : '#000 !important'};
`;

const TextArea = styled.textarea`
  background-color: ${({ edit }) => (edit ? '#fff' : '#f2f2f2')};
  padding: 5px;
  border: ${({ edit }) =>
    edit ? `1px solid ${vars.backgroundYellow}` : '0'} !important;
`;

function SpecialNoteSection() {
  const { dayInfo } = useHealthInfo();
  const dailyDiary = useDiary();
  const { mutate: addDiary } = useAddDiary();
  const { mutate: editHealthInfo } = useEditHealthInfo();
  const { mutate: editDiary } = useEditDiary();
  const [edit, setEdit] = useState(false);
  const [diary, setDiary] = useState('');

  const handleDiary = e => setDiary(e.target.value);

  const isEdit = () => {
    if (edit) {
      !dailyDiary
        ? addDiary(diary)
        : editDiary({
            ...dailyDiary,
            content: diary,
          });
    }

    setEdit(!edit);
  };

  useEffect(() => {
    setDiary(dailyDiary?.content || '');
  }, [dailyDiary]);

  return (
    <section className="SpecialNote diary-section-Padding">
      <div>
        <h2 className="section-title">오늘의 기록</h2>
        <EditButton type="button" onClick={isEdit} edit={edit}>
          {!edit ? <span>편집</span> : <span>저장</span>}
        </EditButton>
      </div>
      <p>오늘의 특이사항을 기록해주세요!</p>
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
