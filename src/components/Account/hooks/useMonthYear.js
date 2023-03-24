import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { fetchAccount } from 'lib/APIs/account';
import { TODAY } from '../../common/Calender/constant';

interface YearMonth {
  dateObject: Date;
  dateTime: string;
  day: string;
  firstDayOfWeek: number;
  lastDay: number;
  month: string;
  monthName: string;
  year: string;
}

export const useMonthYear = (petsId: (number | string)[]): any => {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const queryClient = useQueryClient();
  // console.log(yearMonth);
  // console.log(setYearMonth);
  useEffect(() => {
    const { year: beforeYear, month: beforeMonth } = getNextYearMonth(
      yearMonth.dateObject,
      -1,
    );
    queryClient.prefetchQuery(
      [queryKeys.account, beforeYear, beforeMonth],
      () => fetchAccount(beforeYear, beforeMonth, petsId),
    );
    const { year: nextYear, month: nextMonth } = getNextYearMonth(
      yearMonth.dateObject,
      1,
    );
    queryClient.prefetchQuery([queryKeys.account, nextYear, nextMonth], () =>
      fetchAccount(nextYear, nextMonth, petsId),
    );
  }, [yearMonth, queryClient, petsId]);

  return [yearMonth, setYearMonth];
};
