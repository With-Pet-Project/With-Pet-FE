export const getTotalWeeks = month => {
  const year = new Date().getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();
  const totalWeeks = Math.ceil((firstDay + totalDays) / 7);

  return totalWeeks;
};

export const getStartAndEndDate = (month, week) => {
  let sunday = 0;
  const year = new Date().getFullYear();
  const firstDay = new Date(year, month, 1).getDay();

  sunday = 1 + (week - 1) * 7 - firstDay;

  let date = new Date(year, month, sunday);
  const startDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };

  date = new Date(year, month, sunday + 6);
  const finishDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };

  return { startDate, finishDate };
};
