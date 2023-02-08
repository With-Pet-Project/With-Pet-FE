/* eslint-disable jsx-a11y/label-has-associated-control */
import './DateSelector.scss';
import { useEffect, useState } from 'react';

function DateSelector() {
  const date = new Date();
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState(date.getMonth() + 1);

  const [selectedYear, setSelectedYear] = useState();

  const getYearList = () => {
    const curYear = date.getFullYear();
    return curYear;
  };

  const handleYearChange = e => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = e => {
    setMonth(e.target.value);
  };

  useEffect(() => {
    const curYear = getYearList();
    const years = [];
    for (let i = 0; i < 10; i++) {
      years.push(curYear + i);
    }
    setYear([...years]);
  }, []);

  useEffect(() => {
    setSelectedYear(year[0]);
  }, [year]);

  return (
    <div className="date-select">
      <div>
        <label htmlFor="year-select" />
        <select
          value={selectedYear}
          id="year-select"
          onChange={handleYearChange}
        >
          {year.map(y => (
            <option key={y} value={y}>
              {y}년
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="month-select" />
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
      </div>
    </div>
  );
}

export default DateSelector;
