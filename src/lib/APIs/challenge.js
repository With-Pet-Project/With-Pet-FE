import CLIENT, { BASE_URL } from './client';

export const getAllOfChallenges = async () => {
  const data = await CLIENT.get('/challenge');
  return data;
};
