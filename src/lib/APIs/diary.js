import CLIENT from './client';

export const postCreateDiary = async (
  jwt,
  petId,
  year,
  month,
  day,
  week,
  content,
) => {
  const response = await CLIENT.post(
    `pet/${petId}/diary`,
    {
      content,
      year,
      month,
      day,
      week,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
  return response;
};

export const getReadMonthlyDiary = async (jwt, petId, year, month) => {
  const response = await CLIENT.get(
    `pet/${petId}/diary/monthly?year=${year}&month=${month}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const putEditDiary = async (
  jwt,
  petId,
  { id, content, year, month, day, week },
) => {
  const response = await CLIENT.put(
    `pet/${petId}/diary/${id}`,
    {
      petId,
      content,
      year,
      month,
      day,
      week,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};
