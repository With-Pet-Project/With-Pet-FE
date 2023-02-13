import { useEffect, useState } from 'react';
import { TODAY } from 'constants/date';
import { getComma } from 'utils/account';
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
  const [totalData, setTotalData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalData = Object.values(accountData).reduce(
      (acc, data) => {
        if (data.length === 0) return acc;

        Object.entries(ACCOUNT_LIST).forEach(([key, _]) => {
          const hasKey = Object.keys(...data).includes(key);
          if (!hasKey) return;
          acc[`${key}`] = acc[`${key}`] + data[0][key];
        });
        return acc;
      },
      {
        feed: 0,
        toy: 0,
        hospital: 0,
        beauty: 0,
        etc: 0,
      },
    );
    const newTotalPrice = Object.entries(newTotalData).reduce(
      (acc, [_, value]) => acc + value,
      0,
    );

    setTotalData(newTotalData);
    setTotalPrice(newTotalPrice);
  }, [yearMonth, accountData]);

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
          {/* <span>{getComma(total)}</span> */}
          <span>0</span>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAccountSection;
