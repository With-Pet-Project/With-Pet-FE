import { ReactElement } from 'react';
import { getComma } from 'lib/utils/account';
import Calender from 'components/common/Calender/Calender';
import { ACCOUNT_LIST } from '../constant';
import TotalAccountItem from './TotalAccountItem/TotalAccountItem';
import { YearMonth, AccountTotal, AccountCalender } from 'lib/types/types';
import './TotalAccountSection.scss';

interface TotalAccountSectionProps {
  yearMonth: YearMonth;
  handleMonthChange(index: number): void;
  selectDate: YearMonth;
  handleSelectDate(selected: string): void;
  calenderData: {
    [key: number]: AccountCalender;
  };
  totals: AccountTotal;
}

function TotalAccountSection({
  yearMonth,
  handleMonthChange,
  selectDate,
  handleSelectDate,
  calenderData,
  totals,
}: TotalAccountSectionProps): ReactElement {
  const getPercentage = (divider: number, total: number) =>
    (divider / total) * 100;

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
          <span className="price" data-cy="account-monthly-total">
            {getComma(totals.total)}
          </span>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAccountSection;
