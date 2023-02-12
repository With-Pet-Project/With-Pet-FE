import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'reactQuery/queryKeys';
import axios from 'axios';

const fetchAccount = async () => {
  const { consumptions } = await axios
    .get('/consumption')
    .then(response => response.data)
    .then(({ data }) => data);
  return consumptions;
};

export const useFetchAllAccount = (year, month) => {
  // userId, TODAY
  const fallback = [];
  const { data: consumptions = fallback } = useQuery(
    [queryKeys.account, year, month],
    () => fetchAccount(),
  );
  return consumptions;
};
