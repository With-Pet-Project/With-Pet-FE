/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';

function DateBox({ id, day, handleSelectDate, selectDate, dataLength }) {
  const showHasDataIcon = selectDate !== id && dataLength > 0;

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
