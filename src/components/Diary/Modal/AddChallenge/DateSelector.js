/* eslint-disable jsx-a11y/label-has-associated-control */
import './DateSelector.scss';
import { useEffect, useState } from 'react';

import DownArrow from '../DownArrow';

function DateSelector() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());
  const [days, setDays] = useState([]);

  const handleMonthChange = e => {
    setMonth(e.target.value);
  };

  const handleDayChange = e => {
    setDay(e.target.value);
  };

  useEffect(() => {
    const year = date.getFullYear();
    const lastDay = new Date(year, month, 0).getDate();
    const tmp = [];

    for (let i = 1; i <= lastDay; i++) {
      tmp.push(i);
    }
    setDays([...tmp]);
  }, [month]);

  return (
    <div className="date-select">
      <div>
        <select value={month} id="month-select" onChange={handleMonthChange}>
          <option value="1">01월</option>
          <option value="2">02월</option>
          <option value="3">03월</option>
          <option value="4">04월</option>
          <option value="5">05월</option>
          <option value="6">06월</option>
          <option value="7">07월</option>
          <option value="8">08월</option>
          <option value="9">09월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
        <DownArrow htmlFor="month-select" />
      </div>
      <div>
        <select value={day} id="day-select" onChange={handleDayChange}>
          {days.map(d => (
            <option key={d} value={d}>
              {String(d).padStart(2, '0')}일
            </option>
          ))}
        </select>
        <DownArrow htmlFor="day-select" />
      </div>
    </div>
  );
}

export default DateSelector;
