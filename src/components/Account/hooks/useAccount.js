import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import CLIENT from 'lib/APIs/client';

// export const fetchAccount = async (year, month) => {
//   const { consumptions } = await axios
//     .get(`/consumption/${year}/${month}`)
//     .then(response => response.data)
//     .then(({ data }) => data);
//   // console.log(consumptions);
//   return consumptions;
// };

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
  // console.log(result);
  return result;
};

export const fetchAccount = async (year, month) => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.get(
    `/pet/37/consumption?year=${year}&month=${month}`,
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

export const useAccount = (year, month) => {
  const fallback = {};

  const { data = fallback } = useQuery([queryKeys.account, year, month], () =>
    fetchAccount(year, month),
  );

  return data;
};
