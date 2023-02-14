import { useState, useEffect } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from 'lib/constants/date';

export const fetchAccount = async (year, month) => {
  const { consumptions } = await axios
    .get(`/consumption/${year}/${month}`)
    .then(response => response.data)
    .then(({ data }) => data);
  return consumptions;
};

export const useFetchAllAccount = (year, month) => {
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

const addAccount = ({ petId, feed, toy, hospital, beauty, etc, date }) => {
  axios
    .post('/consumption', { petId, feed, toy, hospital, beauty, etc, date })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const useAddAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ petId, feed, toy, hospital, beauty, etc, date }) =>
      addAccount({ petId, feed, toy, hospital, beauty, etc, date }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
      },
    },
  );
  return mutate;
};

export const deleteAccount = id => {
  console.log(id);
  axios
    .delete(`/consumption/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
