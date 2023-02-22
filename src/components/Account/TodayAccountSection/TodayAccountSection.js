import { useState } from 'react';
import useConfirm from 'components/common/hooks/useConfirm';

import ShowTodayAccount from './ShowTodayAccount/ShowTodayAccount';
import EditTodayAccount from './EditTodayAccount/EditTodayAccount';
import { useDeleteAccount, useUpdateAccount } from '../hooks/useAccount';
import './TodayAccountSection.scss';
// 1. 중복되지않는 밑에만 바꾸면 되는뎅... 넘 하나의 컴포넌트를 다 갈아버렸나??
// 일단 해보고 리펙토링 해보기
// 2. 굳이 useRef로 input value들을 가져와야 하나????
// 지금은 그럴 필요가 없고 이렇게 json으로 구현해도 잘 가져와진다
function TodayAccountSection({ accountData = [] }) {
  const [isEdit, setIsEdit] = useState(false);
  const deleteAccount = useDeleteAccount();
  const updateAccount = useUpdateAccount();

  const accountValue = {
    id: accountData.length > 0 && accountData[0].id,
    feed: accountData.length > 0 && accountData[0].feed,
    toy: accountData.length > 0 && accountData[0].toy,
    hospital: accountData.length > 0 && accountData[0].hospital,
    beauty: accountData.length > 0 && accountData[0].beauty,
    etc: accountData.length > 0 && accountData[0].etc,
  };

  const onConfirm = () => {
    const { id } = accountData[0];
    deleteAccount(id);
  };

  const confirmDelete = useConfirm(onConfirm, '삭제하시겠습니까?');

  const handleDelete = () => {
    confirmDelete();
    setIsEdit(false);
  };

  const handleEditSubmit = event => {
    event.preventDefault();
    updateAccount(accountValue);
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

  const todayContentHtml = isEdit ? (
    <EditTodayAccount accountData={accountData} accountValue={accountValue} />
  ) : (
    <ShowTodayAccount accountData={accountData} />
  );

  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <div>{accountData.length > 0 && btnHtml}</div>
      </div>
      {todayContentHtml}
    </div>
  );
}
export default TodayAccountSection;
