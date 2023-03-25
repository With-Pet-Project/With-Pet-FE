import { toast } from 'react-toastify';
import { TOAST_OPTION } from 'components/common/Toast/toast';
import CLIENT from './client';

export const signup = async (
  email: string,
  password: string,
  nickname: string,
): Promise<any> => {
  const response = await CLIENT.post(
    '/user/signup',
    {
      email,
      password,
      nickname,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).catch(err => {
    console.error(err);
    toast.error(err.response.data.message, TOAST_OPTION);
  });
  console.log(response);

  return response;
};
