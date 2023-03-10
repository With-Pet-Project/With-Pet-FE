import { getComma } from 'lib/utils/account';
import Calender from 'components/common/Calender/Calender';
import { ACCOUNT_LIST } from '../constant';
import TotalAccountItem from './TotalAccountItem/TotalAccountItem';
import './TotalAccountSection.scss';

function TotalAccountSection({
  yearMonth,
  handleMonthChange,
  selectDate,
  handleSelectDate,
  calenderData,
  totals,
}) {
  const getPercentage = (divider, total) => (divider / total) * 100;

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
