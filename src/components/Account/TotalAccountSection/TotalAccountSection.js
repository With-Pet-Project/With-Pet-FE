import { useState } from 'react';
import { TODAY } from 'constants/date';
import Calender from 'components/Diary/ChallengeSection/Calender/Calender';
import {
  getMonthYearDetails,
  getNextYearMonth,
  toDateFormat,
} from 'components/Diary/ChallengeSection/Calender/hooks/date';
import 'components/Diary/ChallengeSection/ChallengeSection.scss';
import './TotalAccountSection.scss';
import ConsumptionList from './ConsumptionList/ConsumptionList';

function TotalAccountSection() {
  // calender를 선언할 때 중복코드가 생긴다. 컴포넌트화가 잘 못된것 같다
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const [selectDate, setSelectDate] = useState(toDateFormat(TODAY));

  const handleMonthChange = index => {
    setYearMonth(prevDate => getNextYearMonth(prevDate.dateObject, index));
  };

  const handleSelectDate = selected => {
    setSelectDate(selected);
  };

  return (
    <div className="total-account">
      <div className="calender-wrapper">
        <Calender
          yearMonth={yearMonth}
          handleMonthChange={handleMonthChange}
          handleSelectDate={handleSelectDate}
          selectDate={selectDate}
        />
      </div>
      <div className="total-consumption">
        <h2>이번달 총 지출</h2>
        <ConsumptionList />
        <ConsumptionList />
        <ConsumptionList />
        <ConsumptionList />
        <div className="total-price">
          <span>100,000</span>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAccountSection;
