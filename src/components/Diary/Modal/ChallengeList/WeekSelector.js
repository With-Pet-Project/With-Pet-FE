/* eslint-disable no-plusplus */
import './WeekSelector.scss';

import { useState, useEffect } from 'react';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import * as utils from '../../util/diary';

function WeekSelector({
  year,
  month,
  week,
  handleChangeMonth,
  handleChangeWeek,
}) {
  const [totalWeeks, setTotalWeeks] = useState([]);

  useEffect(() => {
    const weeks = utils.getTotalWeeks(Number(month) + 1);
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
          <span>{year}. </span>
          <DownArrow htmlFor="yearMonth-select" />
        </div>
        <div className="week-select-item">
          <select value={week} id="week-select" onChange={handleChangeWeek}>
            {totalWeeks.map(t => (
              <option value={t} key={t}>
                {t}주차
              </option>
            ))}
          </select>
          <DownArrow htmlFor="week-select" />
        </div>
      </div>
    </div>
  );
}

export default WeekSelector;
