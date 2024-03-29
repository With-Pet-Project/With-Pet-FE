import CLIENT from './client';
import { AxiosResponse } from 'axios';

export const deleteUser = async (
  jwt: string | null,
): Promise<AxiosResponse> => {
  const response = await CLIENT.delete(`/user`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return response;
};
