import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  getMonthYearDetails,
  toDateFormat,
  toDateObject,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from 'constants/date';
import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import AddAccount from './AddAccount/AddAccount';
import { useFetchAllAccount } from '../hooks/useAccount';
import './AccountMain.scss';

// reactquery 로딩 추가하기
function AccountMain() {
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [isOpenModal, setIsOpenModal] = useState(false);

  // console.log(selectDate);
  const accountData = useFetchAllAccount(yearMonth.year, yearMonth.month);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleSelectDate = selected => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  return (
    <section className="account-container">
      {accountData && (
        <TotalAccountSection
          yearMonth={yearMonth}
          accountData={accountData}
          selectDate={selectDate}
          handleSelectDate={handleSelectDate}
          handleMonthChange={handleMonthChange}
        />
      )}
      {accountData && (
        <TodayAccountSection accountData={accountData[selectDate.day]} />
      )}
      <button type="button" className="add-account-btn" onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
      <AddAccount isOpenModal={isOpenModal} closeModal={closeModal} />
    </section>
  );
}

export default AccountMain;
