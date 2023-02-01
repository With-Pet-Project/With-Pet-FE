import { useState } from 'react';
import { TODAY } from 'constants';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateFormat,
} from './Calender/hooks/date';
import Calender from './Calender/Calender';
import Challenge from './Challenge/Challenge';
import './CenterSection.scss';

function CenterSection() {
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
      <Challenge />
    </section>
  );
}

export default CenterSection;
