import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { fetchAccount } from 'lib/APIs/account';
import { TODAY } from '../../common/Calender/constant';

export const useMonthYear = petsId => {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const queryClient = useQueryClient();

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
