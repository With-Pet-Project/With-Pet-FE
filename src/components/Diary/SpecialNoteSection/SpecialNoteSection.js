/* eslint-disable jsx-a11y/label-has-associated-control */
import './SpecialNoteSection.scss';
import styled from 'styled-components';
import { useState } from 'react';

const EditButton = styled.button`
  color: ${({ edit }) => (edit ? '#62ccab' : '#000 !important')};
`;

const TextArea = styled.textarea`
  background-color: ${({ edit }) => (edit ? '#fff' : '#f2f2f2')};
  border: ${({ edit }) => (edit ? '1px solid #62CCAB' : '0')};
`;

function SpecialNoteSection() {
  const [edit, setEdit] = useState(false);

  const isEdit = () => setEdit(!edit);

  return (
    <section className="SpecialNote diary-section-Padding">
      <div>
        <h2>오늘의 기록</h2>
        <EditButton type="button" onClick={isEdit} edit={edit}>
          {!edit ? <span>편집</span> : <span>저장</span>}
        </EditButton>
      </div>
      <TextArea className="SpecialNote-textArea" disabled={!edit} edit={edit} />
    </section>
  );
}

export default SpecialNoteSection;
