import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  getMonthYearDetails,
  toDateObject,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from 'lib/constants/date';
import FloatButton from 'components/common/FloatButton/FloatButton';
import { useModal } from 'components/common/Modal/context/useModal';
import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import AddAccount from '../Modal/AddAccount/AddAccount';
import { useFetchAllAccount, useMonthYear } from '../hooks/useAccount';
import './AccountMain.scss';

function AccountMain() {
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));
  const [yearMonth, setYearMonth] = useMonthYear();
  const accountData = useFetchAllAccount(yearMonth.year, yearMonth.month);
  const { openModal } = useModal();

  const openAddAccount = () => {
    openModal(AddAccount, { selectDate: selectDate.dateTime });
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
      <FloatButton handleOnClick={openAddAccount}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </FloatButton>
    </section>
  );
}

export default AccountMain;
