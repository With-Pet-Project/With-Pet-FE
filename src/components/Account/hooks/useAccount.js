import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import CLIENT from 'lib/APIs/client';

export const fetchAccount = async (year, month) => {
  const { consumptions } = await axios
    .get(`/consumption/${year}/${month}`)
    .then(response => response.data)
    .then(({ data }) => data);
  // console.log(consumptions);
  return consumptions;
};

// !: 하다가 보류 api 문의함
// export const fetchAccount = async (year, month) => {
//   console.log(year, month);
//   const jwt = localStorage.getItem('jwt_token') || null;
//   const { data } = await CLIENT.get(
//     `/pet/consumption?year=${year}&month=${month}`,
//     {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     },
//   );
//   console.log(data.data);
//   return data.data;
// };

export const useFetchAllAccount = (year, month) => {
  const fallback = {};

  const { data: consumptions = fallback } = useQuery(
    [queryKeys.account, year, month],
    () => fetchAccount(year, month),
  );
  // console.log(consumptions);
  return consumptions;
};
