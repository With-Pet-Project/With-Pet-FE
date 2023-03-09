import { CLIENT } from './client';

export const setSignup = async (email, password, nickname) => {
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
    console.log(err);
    alert(err.response.data.message);
  });

  return response;
};
