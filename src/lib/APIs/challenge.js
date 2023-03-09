import { CLIENT, ACCESS_CLIENT } from './client';

export const getAllOfChallenges = async () => {
  const response = await CLIENT.get('/challenge');
  return response;
};

export const postAddChallenge = async (petId, title, targetCnt) => {
  const response = await ACCESS_CLIENT.post(`/pet/${petId}/challenge`, {
    title,
    targetCnt,
  });

  return response;
};

export const getDailyChallenge = async (petId, year, month, day, week) => {
  const response = await ACCESS_CLIENT.get(
    `/pet/${petId}/challenge/daily?year=${year}&month=${month}&day=${day}&week=${week}`,
  );
  return response;
};

export const getWeeklyChallenge = async (petId, year, month, week) => {
  const response = await ACCESS_CLIENT.get(
    `/pet/${petId}/challenge/weekly?year=${year}&month=${month}&week=${week}`,
  );

  return response;
};

export const postCheckChallenge = async (
  petId,
  challengeId,
  year,
  month,
  day,
  week,
  date, // YYYY-MM-DD
) => {
  const response = await ACCESS_CLIENT.post(
    `/pet/${petId}/challenge/${challengeId}/check/`,
    {
      year: `${year}`,
      month: `${month}`,
      day: `${day}`,
      week: `${week}`,
      date: `${date}`,
    },
  );

  return response;
};

export const deleteUncheckChallenge = async (petId, challengeLogId) => {
  const response = await ACCESS_CLIENT.delete(
    `/pet/${petId}/challenge/check/${challengeLogId}`,
  );

  return response;
};

export const deleteRemoveChallenge = async (petId, challengeId) => {
  const response = await ACCESS_CLIENT.delete(
    `/pet/${petId}/challenge/${challengeId}`,
  );

  return response;
};

export const putEditChallenge = async (
  title,
  targetCnt,
  petId,
  challengeId,
) => {
  const response = await ACCESS_CLIENT.put(
    `/pet/${petId}/challenge/${challengeId}`,
    {
      title,
      targetCnt,
    },
  );
  return response;
};
