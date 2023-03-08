import { useState } from 'react';
import useConfirm from 'components/common/hooks/useConfirm';

import ShowTodayAccount from './ShowTodayAccount/ShowTodayAccount';
import { ACCOUNT_LIST } from '../constant';
import EditTodayAccount from './EditTodayAccount/EditTodayAccount';
import { useDeleteAccount } from '../hooks/useDeleteAccount';
import { useUpdateAccount } from '../hooks/useUpdateAccount';
import './TodayAccountSection.scss';

// api 적용 후 이부분 리펙토링
function TodayAccountSection({
  calenderData,
  accountData,
  yearMonth,
  selectPet,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const deleteAccount = useDeleteAccount();
  const updateAccount = useUpdateAccount();
  // const { consumption } = accountData.length > 0 && accountData[0];
  const accountValue = { ...calenderData };

  const onConfirm = () => {
    const { id } = calenderData;
    deleteAccount({ id, petId: selectPet.id });
  };

  const todayTotal =
    Object.entries(ACCOUNT_LIST).reduce(
      (acc, [key, _]) => acc + calenderData[key],
      0,
    ) || 0;

  const confirmDelete = useConfirm(onConfirm, '삭제하시겠습니까?');

  const handleDelete = () => {
    confirmDelete();
    setIsEdit(false);
  };

  const handleEditSubmit = event => {
    event.preventDefault();
    const { year, month } = yearMonth;
    updateAccount({
      ...accountValue,
      year: Number(year),
      month: Number(month),
      week: 1,
      petId: selectPet.id,
    });
    setIsEdit(false);
  };

  const btnHtml = isEdit ? (
    <>
      <button type="button" onClick={handleDelete}>
        모두삭제
      </button>
      <button
        className="edit-submit-btn"
        type="submit"
        form="edit-account-form"
        onClick={handleEditSubmit}
      >
        완료
      </button>
    </>
  ) : (
    <button type="button" onClick={() => setIsEdit(true)}>
      편집
    </button>
  );

  const hasData = Object.keys(calenderData).length > 0;

  const todayContentHtml = isEdit ? (
    <EditTodayAccount
      accountData={calenderData}
      todayTotal={todayTotal}
      accountValue={accountValue}
    />
  ) : (
    <ShowTodayAccount accountData={calenderData} todayTotal={todayTotal} />
  );

  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <div>{hasData && selectPet.id !== 'all' && btnHtml}</div>
      </div>
      {todayContentHtml}
    </div>
  );
}
export default TodayAccountSection;
