import { CLIENT, ACCESS_CLIENT } from './client';

export const getHealthInfo = async (petId, year, month) => {
  const response = await ACCESS_CLIENT.get(
    `/pet/${petId}/health/monthly?year=${year}&month=${month}`,
  );

  return response;
};

export const postHealthInfo = async (
  petId,
  {
    walkDistance,
    weight,
    drinkAmount,
    feedAmount,
    diary,
    year,
    month,
    week,
    day,
    date,
  },
) => {
  const response = await ACCESS_CLIENT.post(`/pet/${petId}/health`, {
    walkDistance,
    weight,
    drinkAmount,
    feedAmount,
    diary,
    year,
    month,
    week,
    day,
    date,
  });

  return response;
};

export const putEditHealthInfo = async (
  petId,
  { id, walkDistance, weight, drinkAmount, feedAmount, diary },
) => {
  const response = await ACCESS_CLIENT.put(`/pet/${petId}/health/${id}`, {
    walkDistance,
    weight,
    drinkAmount,
    feedAmount,
    diary,
  });

  return response;
};
