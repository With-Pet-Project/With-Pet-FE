import { makeAccountData } from 'components/Account/hooks/useAccount';
import CLIENT from './client';

export const fetchAccount = async (year, month, petsId) => {
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
}) => {
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
