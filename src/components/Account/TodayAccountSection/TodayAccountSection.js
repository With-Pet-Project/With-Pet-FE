import { useState } from 'react';
import './TodayAccountSection.scss';
import ShowTodayAccount from './ShowTodayAccount/ShowTodayAccount';
import EditTodayAccount from './EditTodayAccount/EditTodayAccount';

function TodayAccountSection({ accountData = [] }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <button type="button" onClick={handleEditClick}>
          편집
        </button>
      </div>
      {isEdit ? (
        <EditTodayAccount accountData={accountData} />
      ) : (
        <ShowTodayAccount accountData={accountData} />
      )}
    </div>
  );
}
export default TodayAccountSection;
