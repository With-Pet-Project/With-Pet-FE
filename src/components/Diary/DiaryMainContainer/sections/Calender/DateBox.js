/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';

function DateBox({ id, date, handleSelectDate, selectedDate }) {
  const showHasDataIcon = selectedDate !== id;

  return (
    <div
      role="button"
      tabIndex={0}
      className="item"
      onClick={() => handleSelectDate(id)}
    >
      <div className={`day ${selectedDate === id ? 'active' : ''}`}>{date}</div>
      <div className={`hasData ${showHasDataIcon ? 'show' : ''}`} />
    </div>
  );
}

export default DateBox;
