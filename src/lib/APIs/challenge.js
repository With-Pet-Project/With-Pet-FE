import CLIENT, { BASE_URL } from './client';

export const getAllOfChallenges = async () => {
  const data = await CLIENT.get('/challenge');
  return data;
};

export const postAddChallenge = async (jwt, petId, title, targetCnt = 1) => {
  const data = await CLIENT.post(
    `/pet/${petId}/challenge`,
    {
      title,
      targetCnt,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return data;
};
