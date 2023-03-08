import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  getMonthYearDetails,
  toDateObject,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import FloatButton from 'components/common/FloatButton/FloatButton';
import { usePet } from 'components/Diary/hooks/usePet';
import { useModal } from 'components/common/Modal/context/useModal';
import { TODAY } from '../common/Calender/constant';
import { useAccount } from './hooks/useAccount';
import { useMonthYear } from './hooks/useMonthYear';

import AddAccount from './Modal/AddAccount/AddAccount';
import TotalAccountSection from './TotalAccountSection/TotalAccountSection';
import TodayAccountSection from './TodayAccountSection/TodayAccountSection';
import SelectPet from './SelectPet/SelectPet';

import './Account.scss';

function Account() {
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));
  const [selectPet, setSelectPet] = useState({ id: 'all', name: '전체보기' });
  const pets = usePet();
  const petsId = [...pets.map(pet => pet.id), 'all'];
  const [yearMonth, setYearMonth] = useMonthYear(petsId);
  const accountData = useAccount(yearMonth.year, yearMonth.month, petsId);
  const { openModal } = useModal();

  const openAddAccount = () => {
    openModal(AddAccount, { selectDate });
  };

  const handleSelectDate = selected => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  console.log(accountData);
  console.log(accountData[selectPet.id].calender[selectDate.day]);

  return (
    <section className="account-container account_bg">
      <SelectPet selectPet={selectPet} setSelectPet={setSelectPet} />
      <TotalAccountSection
        yearMonth={yearMonth}
        accountData={accountData}
        calenderData={accountData[selectPet.id].calender}
        totals={accountData[selectPet.id].total}
        selectDate={selectDate}
        handleSelectDate={handleSelectDate}
        handleMonthChange={handleMonthChange}
      />
      <TodayAccountSection
        calenderData={accountData[selectPet.id].calender[selectDate.day]}
        accountData={accountData[selectDate.day]}
        yearMonth={yearMonth}
        selectPet={selectPet}
      />
      <FloatButton handleOnClick={openAddAccount}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </FloatButton>
    </section>
  );
}

export default Account;
