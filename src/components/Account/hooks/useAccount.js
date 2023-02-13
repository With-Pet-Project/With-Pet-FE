import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'reactQuery/queryKeys';
import axios from 'axios';
import {
  getMonthYearDetails,
  toDateObject,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from 'constants/date';

export const fetchAccount = async (year, month) => {
  const { consumptions } = await axios
    .get(`/consumption/${year}/${month}`)
    .then(response => response.data)
    .then(({ data }) => data);
  return consumptions;
};

export const useFetchAllAccount = (year, month) => {
  // userId,
  const fallback = [];
  const { data: consumptions = fallback } = useQuery(
    [queryKeys.account, year, month],
    () => fetchAccount(year, month),
  );
  return consumptions;
};

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
