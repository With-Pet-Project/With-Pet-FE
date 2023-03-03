import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  getMonthYearDetails,
  toDateObject,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import FloatButton from 'components/common/FloatButton/FloatButton';
import { useModal } from 'components/common/Modal/context/useModal';
import { TODAY } from '../common/Calender/constant';
import { useFetchAllAccount } from './hooks/useAccount';
import { useMonthYear } from './hooks/useMonthYear';

import AddAccount from './Modal/AddAccount/AddAccount';
import TotalAccountSection from './TotalAccountSection/TotalAccountSection';
import TodayAccountSection from './TodayAccountSection/TodayAccountSection';
import './Account.scss';

function Account() {
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));
  const [yearMonth, setYearMonth] = useMonthYear();
  const accountData = useFetchAllAccount(yearMonth.year, yearMonth.month);
  const { openModal } = useModal();

  const openAddAccount = () => {
    console.log(selectDate);
    openModal(AddAccount, { selectDate });
  };

  const handleSelectDate = selected => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  return (
    <section className="account-container account_bg">
      <TotalAccountSection
        yearMonth={yearMonth}
        accountData={accountData}
        selectDate={selectDate}
        handleSelectDate={handleSelectDate}
        handleMonthChange={handleMonthChange}
      />
      <TodayAccountSection accountData={accountData[selectDate.day]} />
      <FloatButton handleOnClick={openAddAccount}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </FloatButton>
    </section>
  );
}

export default Account;
