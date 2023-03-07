import CLIENT from './client';

export const getAllOfChallenges = async () => {
  const response = await CLIENT.get('/challenge');
  return response;
};

export const postAddChallenge = async (jwt, petId, title, targetCnt) => {
  const response = await CLIENT.post(
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

  return response;
};

export const getDailyChallenge = async (jwt, petId, year, month, day, week) => {
  const response = await CLIENT.get(
    `/pet/${petId}/challenge/daily?year=${year}&month=${month}&day=${day}&week=${week}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
  return response;
};

export const getWeeklyChallenge = async (jwt, petId, year, month, week) => {
  const response = await CLIENT.get(
    `/pet/${petId}/challenge/weekly?year=${year}&month=${month}&week=${week}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
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
  const response = await CLIENT.post(
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

  return response;
};

export const deleteUncheckChallenge = async (jwt, petId, challengeLogId) => {
  const response = await CLIENT.delete(
    `/pet/${petId}/challenge/check/${challengeLogId}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const deleteRemoveChallenge = async (jwt, petId, challengeId) => {
  const response = await CLIENT.delete(
    `/pet/${petId}/challenge/${challengeId}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const putEditChallenge = async (
  jwt,
  title,
  targetCnt,
  petId,
  challengeId,
) => {
  const response = await CLIENT.put(
    `/pet/${petId}/challenge/${challengeId}`,
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
  return response;
};
