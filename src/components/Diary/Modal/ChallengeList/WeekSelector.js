import './WeekSelector.scss';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import * as utils from '../utils';

function WeekSelector() {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [week, setWeek] = useState(1);
  const [totalWeeks, setTotalWeeks] = useState([]);

  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };

  const handleChangeWeek = e => {
    setWeek(e.target.value);
  };

  useEffect(() => {
    const weeks = utils.getTotalWeeks(month);
    const tmp = [];
    for (let i = 1; i <= weeks; i++) {
      tmp.push(i);
    }
    setTotalWeeks([...tmp]);
  }, [month]);

  return (
    <div className="week-select">
      <p>기간 선택</p>
      <div className="week-select-box">
        <div className="week-select-item">
          <select
            value={month}
            id="yearMonth-select"
            onChange={handleChangeMonth}
          >
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
          </select>
          <label htmlFor="yearMonth-select">{year}. </label>
        </div>
        <div className="week-select-item">
          <select value={week} id="week-select" onChange={handleChangeWeek}>
            {totalWeeks.map(t => (
              <option value={t} key={t}>
                {t}주차
              </option>
            ))}
          </select>
          <label htmlFor="week-select" />
        </div>
      </div>
    </div>
  );
}

export default WeekSelector;
