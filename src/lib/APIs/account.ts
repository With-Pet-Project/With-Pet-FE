import { makeAccountData } from 'components/Account/hooks/useAccount';
import CLIENT from './client';

export const fetchAccount = async (
  year: string,
  month: string,
  petsId: string[] | number[],
) => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const url = `/pet/consumption?year=${year}&month=${month}`;

  const { data } = await CLIENT.get(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  // console.log(JSON.stringify(data.data, null, '\t'));
  const result = makeAccountData(data.data, year, month, petsId);
  // console.log(JSON.stringify(result, null, '\t'));
  return result;
};

type AddAccount = {
  petId: number;
  feed: number;
  toy: number;
  hospital: number;
  beauty: number;
  etc: number;
  day: number;
  month: number;
  year: number;
};

export const addAccount = async ({
  petId,
  feed,
  toy,
  hospital,
  beauty,
  etc,
  day,
  month,
  year,
}: AddAccount) => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.post(
    `/pet/${petId}/consumption`,
    {
      feed: Number(feed),
      toy: Number(toy),
      hospital: Number(hospital),
      beauty: Number(beauty),
      week: 1,
      etc: Number(etc),
      day: Number(day),
      month: Number(month),
      year: Number(year),
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return data;
};

export const deleteAccount = async (id, petId) => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.delete(`/pet/${petId}/consumption/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return data;
};

export const updateAccount = async values => {
  console.log(values);
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.put(
    `/pet/${values.petId}/consumption/${values.id}`,
    values,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
  return data;
};
