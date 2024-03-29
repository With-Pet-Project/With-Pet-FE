/* eslint-disable no-unused-expressions */
import { useState, useEffect, Suspense } from 'react';
import Loading from 'components/common/Loading/Loading';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateObject,
} from 'components/common/Calender/hooks/date';
import Calender from 'components/common/Calender/Calender';
import { useSearchParams } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';

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
    const yearAndMonth = yearMonth.dateTime.split('-');
    const day = selectDate.dateTime.split('-')[2];
    searchParams.set('year', yearAndMonth[0]);
    searchParams.set('month', yearAndMonth[1]);
    searchParams.set('day', day);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, selectDate.dateTime, yearMonth.dateTime]);

  return (
    <section className="diary-center-section">
      <Calender
        yearMonth={yearMonth}
        handleMonthChange={handleMonthChange}
        handleSelectDate={handleSelectDate}
        selectDate={selectDate.dateTime}
        data={[]}
      />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <Challenge />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}

export default ChallengeSection;
