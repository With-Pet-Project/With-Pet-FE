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
  {
    walkDistance,
    weight,
    drinkAmount,
    feedAmount,
    year,
    month,
    week,
    day,
    date,
  },
) => {
  const response = await CLIENT.post(
    `/pet/${petId}/health`,
    {
      walkDistance,
      weight,
      drinkAmount,
      feedAmount,
      year,
      month,
      week,
      day,
      date,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const putEditHealthInfo = async (
  jwt,
  petId,
  { id, walkDistance, weight, drinkAmount, feedAmount },
) => {
  const response = CLIENT.put(
    `/pet/${petId}/health/${id}`,
    {
      walkDistance,
      weight,
      drinkAmount,
      feedAmount,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};
