import { useState, useEffect } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import {
  getMonthYearDetails,
  getNextYearMonth,
} from 'components/common/Calender/hooks/date';
import { TODAY } from 'lib/constants/date';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';

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

const addAccount = async ({
  petId,
  feed,
  toy,
  hospital,
  beauty,
  etc,
  date,
}) => {
  const { data } = await axios.post('/consumption', {
    petId,
    feed,
    toy,
    hospital,
    beauty,
    etc,
    date,
  });
  return data;
};
//  isLoading이 계속 false로 뜨고 간간히 됨ㅜ
export const useAddAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ petId, feed, toy, hospital, beauty, etc, date }) =>
      addAccount({ petId, feed, toy, hospital, beauty, etc, date }),
    {
      useErrorBoundary: false,
      retry: 0,
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
        toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      },
      onError: () => {
        toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
      },
    },
  );

  return mutate;
};

export const deleteAccount = async id => {
  const { data } = await axios.delete(`/consumption/${id}`);
  return data;
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(id => deleteAccount(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.account]);
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
    },
  });
  return mutate;
};

const updateAccount = async values => {
  const { data } = await axios.patch('/consumption', values);
  return data;
};

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(values => updateAccount(values), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.account]);
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
  });

  return mutate;
};
