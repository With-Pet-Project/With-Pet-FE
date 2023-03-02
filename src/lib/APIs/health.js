import CLIENT from './client';

export const getHealthInfo = async (jwt, petId, year, month) => {
  const response = await CLIENT.get(
    `/pet/${petId}/health/monthly?year=${year}&month=${month}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const postHealthInfo = async (
  jwt,
  petId,
  health,
  walkDistance,
  weight,
  drinkAmount,
  feedAmount,
) => {
  const response = await CLIENT.delete();
};
