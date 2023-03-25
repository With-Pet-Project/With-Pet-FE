import CLIENT from './client';

export const deleteUser = async jwt => {
  const response = await CLIENT.delete(`/user`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return response;
};
