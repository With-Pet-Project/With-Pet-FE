// !:나중에 분기하고 정리하기
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'reactQuery/queryKeys';

const fetchAccount = async () => {
  const { consumptions } = await fetch('/consumption')
    .then(res => res.json())
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
