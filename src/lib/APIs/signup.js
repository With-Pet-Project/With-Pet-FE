import { toast } from 'react-toastify';
import { TOAST_OPTION } from 'components/common/Toast/toast';
import CLIENT from './client';

export const signup = async (email, password, nickname) => {
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

  return response;
};
