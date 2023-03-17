/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';
import { TODAY } from './constant';
import { getMonthYearDetails } from './hooks/date';

function DateBox({ id, day, handleSelectDate, selectDate, data = {} }) {
  const hasData = Object.keys(data).length > 0;
  const showHasDataIcon = selectDate !== id && hasData;
  const { dateTime: today } = getMonthYearDetails(TODAY);
  const isToday = selectDate !== id && today === id;

  return (
    <div
      role="button"
      tabIndex={0}
      className="item"
      onClick={() => handleSelectDate(id)}
      data-cy="calender-date"
    >
      <div
        className={`day ${selectDate === id ? 'hasDataFont' : ''} ${
          isToday ? 'today' : ''
        }`}
      >
        {day}
      </div>
      <div className={`hasDataIcon ${showHasDataIcon ? 'show' : ''}`} />
    </div>
  );
}

export default DateBox;
