/* eslint-disable react/no-array-index-key */
import './Calender.scss';

function Calender({ yearMonth, handleMonthChange }) {
  const { year, monthName } = yearMonth;

  const setCalender = () => {
    const { month, firstDayOfWeek, lastDay } = yearMonth;

    const firstDayOfWeekHtml = Array(firstDayOfWeek)
      .fill(null)
      .map((_, index) => (
        <div className="item" key={`empty${index}`} id={`empty${index}`} />
      ));

    const weeks = Array(lastDay)
      .fill(null)
      .map((_, index) => index + 1);

    const weeksHtml = weeks.map(day => {
      const id = `${year}-${month}-${day < 10 ? `0${day}` : day}`; // 이건 형태 고민해보기

      return (
        <div key={id} className="item">
          {day}
        </div>
      );
    });

    return [...firstDayOfWeekHtml, ...weeksHtml];
  };

  const contentsHtml = setCalender();

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
        <div className="date">
          <div className="item">Sun</div>
          <div className="item">Mon</div>
          <div className="item">Tue</div>
          <div className="item">Wed</div>
          <div className="item">Thur</div>
          <div className="item">Fri</div>
          <div className="item">Sat</div>
        </div>
        <div className="days">{contentsHtml}</div>
      </div>
    </div>
  );
}

export default Calender;
