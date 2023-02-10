import { useState } from 'react';
import { TODAY } from 'constants/date';
import Calender from 'components/common/Calender/Calender';
import 'components/Diary/ChallengeSection/ChallengeSection.scss';
import { ACCOUNT_LIST } from 'constants/account';
import './TotalAccountSection.scss';
import TotalAccountItem from './TotalAccountItem/TotalAccountItem';

function TotalAccountSection({
  yearMonth,
  handleMonthChange,
  accountData,
  selectDate,
  handleSelectDate,
}) {
  // console.log(accountData);
  // 여기나 이 이전에서 토탈 구하기
  const totalAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, darkColor }]) => (
      <TotalAccountItem
        key={key}
        name={name}
        price="10000"
        percent="40%"
        color={darkColor}
      />
    ),
  );

  return (
    <div className="total-account">
      <div className="calender-wrapper">
        <Calender
          yearMonth={yearMonth}
          handleMonthChange={handleMonthChange}
          handleSelectDate={handleSelectDate}
          selectDate={selectDate.dateTime}
          data={accountData}
        />
      </div>
      <div className="total-consumption">
        <h2>이번달 총 지출</h2>
        <ul>{totalAccountItemHtml}</ul>
        <div className="total-price">
          <span>100,000</span>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAccountSection;
