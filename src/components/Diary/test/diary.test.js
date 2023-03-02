import { getStartAndEndDate, getTotalWeeks } from '../util/diary';

test('Function getStartAndEndDate (Feb, first week)', () => {
  // 2월 첫째주
  const { startDate, finishDate } = getStartAndEndDate(1, 1);

  expect(startDate).toStrictEqual({ year: 2023, month: 0, day: 29 });
  expect(finishDate).toStrictEqual({ year: 2023, month: 1, day: 4 });
});

test('Function getStartAndEndDate (Feb, middle week)', () => {
  // 2월 첫째주
  const { startDate, finishDate } = getStartAndEndDate(1, 3);

  expect(startDate).toStrictEqual({ year: 2023, month: 1, day: 12 });
  expect(finishDate).toStrictEqual({ year: 2023, month: 1, day: 18 });
});

test('Function getStartAndEndDate (Feb, last week)', () => {
  // 2월 마지막주
  const { startDate, finishDate } = getStartAndEndDate(1, 5);

  expect(startDate).toStrictEqual({ year: 2023, month: 1, day: 26 });
  expect(finishDate).toStrictEqual({ year: 2023, month: 2, day: 4 });
});

test('Function getTotalWeeks', () => {
  const JANUARY = getTotalWeeks(1);
  expect(JANUARY).toBe(5);

  const FEB = getTotalWeeks(2);
  expect(FEB).toBe(4);

  const APRIL = getTotalWeeks(4);
  expect(APRIL).toBe(5);
});
