import CLIENT from './client';

export const postCreatePetInfo = async (name, initWeight, birthday, jwt) => {
  const response = await CLIENT.post(
    '/pet',
    {
      name,
      initWeight,
      birthday,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const getAllPetInfo = async (jwt, petId = null) => {
  const response = await CLIENT.get(petId ? `/pet/${petId}` : '/pet', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};

export const deletePetInfo = async (jwt, petId) => {
  const response = await CLIENT.delete(`/pet/${petId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};
