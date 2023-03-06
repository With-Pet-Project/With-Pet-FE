import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import CLIENT from 'lib/APIs/client';

const makeAccountData = (accounts, year, month) => {
  const lastDay = new Date(year, Number(month), 0).getDate();
  const result = Array(lastDay)
    .fill(null)
    .reduce((acc, _, index) => {
      acc[`${index + 1}`] = [];
      return acc;
    }, {});

  accounts.forEach(account => {
    result[`${account.day}`] = [...result[`${account.day}`], { ...account }];
  });
  return result;
};

export const fetchAccount = async (year, month, petId) => {
  const jwt = localStorage.getItem('jwt_token') || null;
  let id = petId;
  if (petId === 'all') id = '37'; // 나중에 전체보기 api 나오면 수정하기
  const { data } = await CLIENT.get(
    `/pet/${id}/consumption?year=${year}&month=${month}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  // console.log(data.data);
  const result = makeAccountData(data.data, year, month);
  return result;
};

export const useAccount = (year, month, petId) => {
  const fallback = {};

  const { data = fallback } = useQuery(
    [queryKeys.account, year, month, petId],
    () => fetchAccount(year, month, petId),
  );

  return data;
};
