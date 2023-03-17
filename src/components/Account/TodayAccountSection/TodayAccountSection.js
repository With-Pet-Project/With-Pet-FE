import { useState, useEffect } from 'react';
import useConfirm from 'components/common/hooks/useConfirm';

import ShowTodayAccount from './ShowTodayAccount/ShowTodayAccount';
import { ACCOUNT_LIST } from '../constant';
import EditTodayAccount from './EditTodayAccount/EditTodayAccount';
import { useDeleteAccount } from '../hooks/useDeleteAccount';
import { useUpdateAccount } from '../hooks/useUpdateAccount';
import './TodayAccountSection.scss';

function TodayAccountSection({ calenderData, yearMonth, selectPet }) {
  const [isEdit, setIsEdit] = useState(false);
  const deleteAccount = useDeleteAccount();
  const updateAccount = useUpdateAccount();
  const updateData = { ...calenderData };
  const isShownBtn =
    Object.keys(calenderData).length > 0 && selectPet.id !== 'all';

  const todayTotal =
    Object.entries(ACCOUNT_LIST).reduce(
      (acc, [key, _]) => acc + calenderData[key],
      0,
    ) || 0;

  useEffect(() => {
    setIsEdit(false);
  }, [selectPet, yearMonth]);

  const onConfirm = () => {
    const { id } = calenderData;
    deleteAccount({ id, petId: selectPet.id });
  };

  const confirmDelete = useConfirm(onConfirm, '삭제하시겠습니까?');

  const handleDelete = () => {
    confirmDelete();
    setIsEdit(false);
  };

  const handleEditSubmit = event => {
    event.preventDefault();
    const { year, month } = yearMonth;

    updateAccount({
      ...updateData,
      year: Number(year),
      month: Number(month),
      week: 1,
      petId: selectPet.id,
    });
    setIsEdit(false);
  };

  const btnHtml = isEdit ? (
    <>
      <button type="button" onClick={handleDelete} data-cy="account-delete-btn">
        모두삭제
      </button>
      <button
        className="edit-submit-btn"
        type="submit"
        form="edit-account-form"
        onClick={handleEditSubmit}
        data-cy="account-edit-submit-btn"
      >
        완료
      </button>
    </>
  ) : (
    <button
      type="button"
      data-cy="account-edit-btn"
      onClick={() => setIsEdit(true)}
    >
      편집
    </button>
  );

  const todayContentHtml = isEdit ? (
    <EditTodayAccount
      data={calenderData}
      todayTotal={todayTotal}
      updateData={updateData}
    />
  ) : (
    <ShowTodayAccount data={calenderData} todayTotal={todayTotal} />
  );

  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <div>{isShownBtn && btnHtml}</div>
      </div>
      {todayContentHtml}
    </div>
  );
}
export default TodayAccountSection;
