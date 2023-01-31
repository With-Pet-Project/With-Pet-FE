import { useState } from 'react';
import { TODAY, getMonthYearDetails, getNextYearMonth } from 'constants';
import Calender from '../Calender/Calender';
import Challenge from '../Challenge/Challenge';
import './CenterSection.scss';

function CenterSection() {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  return (
    <section className="diary-center-section">
      <Calender yearMonth={yearMonth} handleMonthChange={handleMonthChange} />
      <Challenge />
    </section>
  );
}

export default CenterSection;
