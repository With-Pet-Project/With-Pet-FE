/* eslint-disable react/no-array-index-key */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import DateBox from './DateBox';
import { DAY_LIST } from './constant';
import { YearMonth, AccountCalender } from 'lib/types/types';
import './Calender.scss';

interface CalenderProps {
  yearMonth: YearMonth;
  handleMonthChange(index: number): void;
  handleSelectDate(selected: string): void;
  selectDate: string;
  data: {
    [key: number]: AccountCalender;
  };
}

function Calender({
  yearMonth,
  handleMonthChange,
  handleSelectDate,
  selectDate,
  data,
}: CalenderProps): ReactElement {
  const { year, monthName, month, firstDayOfWeek, lastDay } = yearMonth;

  const getRestDayOfWeekHtml = () => {
    const days = Array(lastDay)
      .fill(null)
      .map((_, index) => index + 1);

    return days.map(day => {
      const id = `${year}-${month}-${day < 10 ? `0${day}` : day}`; // 이건 형태 고민해보기
      return (
        <DateBox
          key={id}
          day={day}
          id={id}
          handleSelectDate={handleSelectDate}
          selectDate={selectDate}
          data={data[day]}
        />
      );
    });
  };

  const firstDayOfWeekHtml = Array(firstDayOfWeek)
    .fill(null)
    .map((_, index) => <div key={`empty${index}`} />);
  const restDayOfWeekHtml = getRestDayOfWeekHtml();
  const daysHtml = [...firstDayOfWeekHtml, ...restDayOfWeekHtml];
  const dayOfWeekHtml = DAY_LIST.map(day => (
    <div className="item" key={day}>
      {day}
    </div>
  ));

  return (
    <div className="calender">
      <div className="header">
        <h2>
          {monthName}, {year}
        </h2>
        <div className="buttons">
          <button type="button" onClick={() => handleMonthChange(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" onClick={() => handleMonthChange(1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="body">
        <div className="dayOfWeek">{dayOfWeekHtml}</div>
        <div className="days">{daysHtml}</div>
      </div>
    </div>
  );
}

export default Calender;
