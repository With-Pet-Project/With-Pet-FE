import { useState, useContext } from 'react';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateObject,
} from 'components/common/Calender/hooks/date';
import Calender from 'components/common/Calender/Calender';
import { TODAY } from '../../common/Calender/constant';

import { dateContext } from './context/DateContext';
import Challenge from './Challenge/Challenge';
import './ChallengeSection.scss';

function ChallengeSection() {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [selectDate, setSelectDate] = useContext(dateContext);

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  const handleSelectDate = selected => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  return (
    <section className="diary-center-section">
      <Calender
        yearMonth={yearMonth}
        handleMonthChange={handleMonthChange}
        handleSelectDate={handleSelectDate}
        selectDate={selectDate.dateTime}
        data={[]}
      />
      <Challenge />
    </section>
  );
}

export default ChallengeSection;
