/* eslint-disable react/no-array-index-key */
import { DAY_LIST } from 'constants';
import DateBox from './DateBox';
import './Calender.scss';

function Calender({
  yearMonth,
  handleMonthChange,
  handleSelectDate,
  selectedDate,
}) {
  const { year, monthName, month, firstDayOfWeek, lastDay } = yearMonth;

  const getWeeksHtml = () => {
    const weeks = Array(lastDay)
      .fill(null)
      .map((_, index) => index + 1);

    const weeksHtml = weeks.map(day => {
      const id = `${year}-${month}-${day < 10 ? `0${day}` : day}`; // 이건 형태 고민해보기
      return (
        <DateBox
          key={id}
          date={day}
          id={id}
          handleSelectDate={handleSelectDate}
          selectedDate={selectedDate}
        />
      );
    });
    return weeksHtml;
  };

  const firstDayOfWeekHtml = Array(firstDayOfWeek)
    .fill(null)
    .map((_, index) => <div className="item" key={`empty${index}`} />);
  const weeksHtml = getWeeksHtml();
  const contentsHtml = [...firstDayOfWeekHtml, ...weeksHtml];
  const dateHtml = DAY_LIST.map(day => (
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
            ←
          </button>
          <button type="button" onClick={() => handleMonthChange(1)}>
            →
          </button>
        </div>
      </div>
      <div className="body">
        <div className="date">{dateHtml}</div>
        <div className="days">{contentsHtml}</div>
      </div>
    </div>
  );
}

export default Calender;
