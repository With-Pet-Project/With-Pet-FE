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

export const postCheckChallenge = async (
  jwt,
  petId,
  challengeId,
  year,
  month,
  day,
  week,
  date, // YYYY-MM-DD
) => {
  const data = await CLIENT.post(
    `/pet/${petId}/challenge/${challengeId}/check/`,
    {
      year: `${year}`,
      month: `${month}`,
      day: `${day}`,
      week: `${week}`,
      date: `${date}`,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return data;
};

export const deleteUncheckChallenge = async (jwt, petId, challengeLogId) => {
  const data = await CLIENT.delete(
    `/pet/${petId}/challenge/check/${challengeLogId}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return data;
};

export const deleteRemoveChallenge = async (jwt, petId, challengeId) => {
  const data = await CLIENT.delete(`/pet/${petId}/challenge/${challengeId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return data;
};
