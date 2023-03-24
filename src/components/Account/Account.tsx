import { useState, ReactElement } from 'react';
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
import { YearMonth, AccountDataItems } from 'lib/types/types';

const DEFAULT_PET = { id: 'all', name: '전체보기' };

interface SelectPetProps {
  id: number | string;
  name: string;
}

function Account(): ReactElement {
  const [selectDate, setSelectDate] = useState<YearMonth>(
    getMonthYearDetails(TODAY),
  );
  const [selectPet, setSelectPet] = useState<SelectPetProps>(DEFAULT_PET);
  const pets = usePet();
  const petsId = [...pets.map(pet => pet.id), 'all'];
  const [yearMonth, setYearMonth] = useMonthYear(petsId);
  const { openModal } = useModal();
  const accountData = useAccount(
    yearMonth.year,
    yearMonth.month,
    petsId,
  ) as AccountDataItems;
  const currentCalender = accountData[selectPet.id].calender;
  const currentTotal = accountData[selectPet.id].total;

  const openAddAccount = (): void => {
    openModal(AddAccount, { selectDate, accountData });
  };

  const handleSelectDate = (selected: string) => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  const handleMonthChange = (index: number): void => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  return (
    <section className="account-container account_bg">
      <SelectPet selectPet={selectPet} setSelectPet={setSelectPet} />
      <TotalAccountSection
        yearMonth={yearMonth}
        calenderData={currentCalender}
        totals={currentTotal}
        selectDate={selectDate}
        handleSelectDate={handleSelectDate}
        handleMonthChange={handleMonthChange}
      />
      <TodayAccountSection
        calenderData={currentCalender[selectDate.day]}
        yearMonth={yearMonth}
        selectPet={selectPet}
      />

      <FloatButton handleOnClick={openAddAccount} cy="account-add-btn">
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </FloatButton>
    </section>
  );
}

export default Account;
