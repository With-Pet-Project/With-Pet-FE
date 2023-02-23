import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from '../../common/Calender/constant';
import { fetchAccount } from './useAccount';

export const useMonthYear = () => {
  const [yearMonth, setYearMonth] = useState(getMonthYearDetails(TODAY));
  const queryClient = useQueryClient();

  useEffect(() => {
    const { year, month } = getNextYearMonth(yearMonth.dateObject, -1);
    queryClient.prefetchQuery([queryKeys.account, year, month], () =>
      fetchAccount(year, month),
    );
  }, [yearMonth, queryClient]);

  return [yearMonth, setYearMonth];
};
