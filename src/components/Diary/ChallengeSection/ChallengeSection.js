/* eslint-disable no-unused-expressions */
import { useState, useContext, useEffect } from 'react';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateObject,
} from 'components/common/Calender/hooks/date';
import Calender from 'components/common/Calender/Calender';
import { dateContext } from 'components/Diary/context/DateContext';
import { useSearchParams } from 'react-router-dom';
import { TODAY } from '../../common/Calender/constant';

import Challenge from './Challenge/Challenge';
import './ChallengeSection.scss';

function ChallengeSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  const handleSelectDate = selected => {
    const nextDate = toDateObject(selected);
    setSelectDate(getMonthYearDetails(nextDate));
  };

  useEffect(() => {
    const date = selectDate.dateTime.split('-');
    searchParams.set('year', date[0]);
    searchParams.set('month', date[1]);
    searchParams.set('day', date[2]);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, selectDate.dateTime]);

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
