export const getTotalWeeks = month => {
  // 첫 주의 기준 매달 1일일 경우로 수정
  // const firstDay = new Date(year, month, 1).getDay();
  const year = new Date().getFullYear();
  const totalDays = new Date(year, month, 0).getDate();
  const totalWeeks = Math.ceil(totalDays / 7);

  return totalWeeks;
};

export const whatWeek = day => {
  // parameter 수정: year, month, day => day
  // 한 주의 기준을 일요일 => 매달 1일로 수정
  //  const firstDay = new Date(year, Number(month), 1).getDay();
  return Math.ceil(Number(day) / 7);
};

export const getStartAndEndDate = (month, week) => {
  // 첫 주의 기준을 일요일로 할 경우의 함수
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
