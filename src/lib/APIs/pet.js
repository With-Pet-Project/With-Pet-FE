import { CLIENT, ACCESS_CLIENT } from './client';

export const postCreatePetInfo = async (name, initWeight, birthday) => {
  const response = await ACCESS_CLIENT.post('/pet', {
    name,
    initWeight,
    birthday,
  });

  return response;
};

export const getAllPetInfo = async () => {
  const response = await ACCESS_CLIENT.get('/pet');

  return response;
};

export const getPetInfoById = async petId => {
  if (!petId) {
    return false;
  }

  const response = await ACCESS_CLIENT.get(`/pet/${petId}`);

  return response;
};

export const deletePetInfo = async petId => {
  const response = await ACCESS_CLIENT.delete(`/pet/${petId}`);

  return response;
};
