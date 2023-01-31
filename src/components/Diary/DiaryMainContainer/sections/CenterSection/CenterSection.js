import { useState } from 'react';
import {
  TODAY,
  getMonthYearDetails,
  getNextYearMonth,
  toDateFormat,
} from 'constants';
import Calender from './Calender/Calender';
import Challenge from './Challenge/Challenge';
import './CenterSection.scss';

function CenterSection() {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [selectedDate, setSelectedDate] = useState(toDateFormat(TODAY));

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  const handleSelectDate = selected => {
    setSelectedDate(selected);
  };

  return (
    <section className="diary-center-section">
      <Calender
        yearMonth={yearMonth}
        handleMonthChange={handleMonthChange}
        handleSelectDate={handleSelectDate}
        selectedDate={selectedDate}
      />
      <Challenge />
    </section>
  );
}

export default CenterSection;
