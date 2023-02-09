import { useState } from 'react';
import { TODAY } from 'constants/date';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateFormat,
} from 'components/common/Calender/hooks/date';
import Calender from 'components/common/Calender/Calender';

import Challenge from './Challenge/Challenge';
import './ChallengeSection.scss';

import { ModalControllerProvider } from './Challenge/context/modalController';

function ChallengeSection() {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [selectDate, setSelectDate] = useState(toDateFormat(TODAY));

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  const handleSelectDate = selected => {
    setSelectDate(selected);
  };

  return (
    <section className="diary-center-section">
      <Calender
        yearMonth={yearMonth}
        handleMonthChange={handleMonthChange}
        handleSelectDate={handleSelectDate}
        selectDate={selectDate}
      />
      <ModalControllerProvider>
        <Challenge />
      </ModalControllerProvider>
    </section>
  );
}

export default ChallengeSection;
