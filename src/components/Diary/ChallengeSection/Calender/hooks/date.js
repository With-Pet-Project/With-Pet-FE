import { MONTH_LIST } from 'constants/date';

export const getMonthYearDetails = date => {
  const monthIndex = date.getMonth();
  const monthName = MONTH_LIST[monthIndex];
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const year = date.getFullYear().toString();
  // const day = date.getDate().toString();
  const dateObject = date;
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const dateTime = `${year}-${month}-${
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  }`;
  return {
    monthName,
    year,
    dateObject,
    firstDayOfWeek,
    lastDay,
    // monthIndex,
    month,
    // day,
    dateTime,
  };
};

export const getNextYearMonth = (date, index) => {
  const nextDate = new Date(date);
  const newMonth = nextDate.getMonth() + index;
  nextDate.setDate(1);
  nextDate.setMonth(newMonth);
  return getMonthYearDetails(nextDate);
};

export const toDateFormat = date => {
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const year = date.getFullYear().toString();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${year}-${month}-${day}`;
};
