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

export const getAllPetInfo = async jwt => {
  const response = await CLIENT.get('/pet', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};

export const getPetInfoById = async (jwt, petId) => {
  if (!petId) {
    return false;
  }

  const response = await CLIENT.get(`/pet/${petId}`, {
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

export const updatePet = async (jwt, newPet) => {
  const { data } = await CLIENT.put(`/pet/${newPet.id}`, newPet, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  return data;
};
