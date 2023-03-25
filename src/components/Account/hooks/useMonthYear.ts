import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { fetchAccount } from 'lib/APIs/account';
import { TODAY } from '../../common/Calender/constant';
import { YearMonth } from 'lib/types/types';

interface Props {
  yearMonth?: YearMonth;
  setYearMonth?: Dispatch<SetStateAction<YearMonth>>;
}

export const useMonthYear = (petsId: (number | string)[]): any => {
  const [yearMonth, setYearMonth] = useState<YearMonth>(
    getMonthYearDetails(TODAY),
  );
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
