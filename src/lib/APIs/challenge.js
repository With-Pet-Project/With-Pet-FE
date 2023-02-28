import CLIENT from './client';

export const getAllOfChallenges = async () => {
  const data = await CLIENT.get('/challenge');
  return data;
};

export const postAddChallenge = async (jwt, petId, title, targetCnt) => {
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

export const getDailyChallenge = async (jwt, petId, year, month, day, week) => {
  const data = await CLIENT.get(
    `/pet/${petId}/challenge/daily?year=${year}&month=${month}&day=${day}&week=${week}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
  return data;
};

export const getWeeklyChallenge = async (jwt, petId, year, month, week) => {
  const data = await CLIENT.get(
    `/pet/${petId}/challenge/weekly?year=${year}&month=${month}&week=${week}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return data;
};
