/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';
import { TODAY } from 'lib/constants/date';
import { getMonthYearDetails } from './hooks/date';

function DateBox({ id, day, handleSelectDate, selectDate, data = [] }) {
  const showHasDataIcon = selectDate !== id && data.length > 0;
  const { dateTime: today } = getMonthYearDetails(TODAY);
  const isToday = selectDate !== id && today === id;

  return (
    <div
      role="button"
      tabIndex={0}
      className="item"
      onClick={() => handleSelectDate(id)}
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
