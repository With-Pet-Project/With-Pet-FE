/* eslint-disable jsx-a11y/click-events-have-key-events */
import './DateBox.scss';
import { ReactElement } from 'react';
import { TODAY } from './constant';
import { getMonthYearDetails } from './hooks/date';
import { AccountCalender } from 'lib/types/types';

interface DateBoxProps {
  id: string;
  day: number;
  handleSelectDate: any;
  selectDate: string;
  data: AccountCalender;
}

function DateBox({
  id,
  day,
  handleSelectDate,
  selectDate,
  data = {},
}: DateBoxProps): ReactElement {
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
