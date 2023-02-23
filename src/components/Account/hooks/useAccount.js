import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';

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
