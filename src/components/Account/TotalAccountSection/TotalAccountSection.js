import { useEffect, useState } from 'react';
import { getComma } from 'lib/utils/account';
import Calender from 'components/common/Calender/Calender';
import { ACCOUNT_LIST, DEFAULT_TOTAL_LIST } from '../constant';
import TotalAccountItem from './TotalAccountItem/TotalAccountItem';
import './TotalAccountSection.scss';

function TotalAccountSection({
  yearMonth,
  handleMonthChange,
  accountData,
  selectDate,
  handleSelectDate,
  calenderData,
  totals,
}) {
  const [totalData, setTotalData] = useState({ ...DEFAULT_TOTAL_LIST });
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(JSON.stringify(accountData, null, '\t'));
  const getPercentage = (divider, total) => (divider / total) * 100;

  // console.log(calenderData);
  // console.log(totals);

  // useEffect(() => {
  //   const newTotalData = Object.values(accountData).reduce(
  //     (acc, data) => {
  //       if (data.length === 0) return acc;
  //       Object.entries(ACCOUNT_LIST).forEach(([key, _]) => {
  //         const { consumption } = data[0];
  //         const hasKey = Object.keys(consumption).includes(key);
  //         if (!hasKey) return;
  //         acc[`${key}`] = acc[`${key}`] + data[0].consumption[key];
  //       });
  //       return acc;
  //     },
  //     { ...DEFAULT_TOTAL_LIST },
  //   );

  //   const newTotalPrice = Object.entries(newTotalData).reduce(
  //     (acc, [_, value]) => acc + value,
  //     0,
  //   );

  //   setTotalData(newTotalData);
  //   setTotalPrice(newTotalPrice);
  // }, [yearMonth, accountData]);

  // const totalAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
  //   ([key, { name, darkColor }]) => (
  //     <TotalAccountItem
  //       key={key}
  //       name={name}
  //       price={totalData[`${key}`]}
  //       percent={getPercentage(totalData[`${key}`], totalPrice)}
  //       color={darkColor}
  //     />
  //   ),
  // );

  const totalAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, darkColor }]) => (
      <TotalAccountItem
        key={key}
        name={name}
        price={totals[`${key}`]}
        percent={getPercentage(totals[`${key}`], totals.total)}
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
          data={calenderData}
          // data={accountData}
        />
      </div>
      <div className="total-consumption">
        <h2>이번달 총 지출</h2>
        <ul>{totalAccountItemHtml}</ul>
        <div className="total-price">
          <span className="price">{getComma(totals.total)}</span>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAccountSection;
