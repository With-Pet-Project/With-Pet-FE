import { useState } from 'react';
import './TodayAccountSection.scss';
import ShowTodayAccount from './ShowTodayAccount/ShowTodayAccount';
import EditTodayAccount from './EditTodayAccount/EditTodayAccount';
import useConfirm from '../hooks/useConfirm';
// 중복되지않는 밑에만 바꾸면 되는뎅... 넘 하나의 컴포넌트를 다 갈아버렸나??
// 일단 해보고 리펙토링 해보기

function TodayAccountSection({ accountData = [] }) {
  const [isEdit, setIsEdit] = useState(false);
  const onConfirm = () => alert('삭제했습니다.');
  const confirmDelete = useConfirm(onConfirm, '삭제하시겠습니까?');

  const handleEditClick = bool => {
    setIsEdit(bool);
  };

  const handleDelete = () => {
    confirmDelete();
  };

  const BtnHtml = isEdit ? (
    <button
      className="edit-btn"
      type="button"
      onClick={() => handleEditClick(false)}
    >
      완료
    </button>
  ) : (
    <button
      className="edit-btn"
      type="button"
      onClick={() => handleEditClick(true)}
    >
      편집
    </button>
  );

  const todayContentHtml = isEdit ? (
    <EditTodayAccount accountData={accountData} />
  ) : (
    <ShowTodayAccount accountData={accountData} />
  );

  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <div>
          <button type="button" onClick={handleDelete}>
            모두삭제
          </button>
          {BtnHtml}
        </div>
      </div>
      {todayContentHtml}
    </div>
  );
}
export default TodayAccountSection;
