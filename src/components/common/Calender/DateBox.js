/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';

function DateBox({ id, day, handleSelectDate, selectDate }) {
  const showHasDataIcon = selectDate !== id;

  return (
    <div
      role="button"
      tabIndex={0}
      className="item"
      onClick={() => handleSelectDate(id)}
    >
      <div className={`day ${selectDate === id ? 'active' : ''}`}>{day}</div>
      <div className={`hasDataIcon ${showHasDataIcon ? 'show' : ''}`} />
    </div>
  );
}

export default DateBox;
