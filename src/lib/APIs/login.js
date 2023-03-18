import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import CLIENT from './client';

// 카카오 토큰 얻는 함수
export const getKakaoUserLoginToken = async code => {
  const response = await CLIENT.post(`/user/login/kakao?code=${code}`, {
    redirectURI: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
  return response;
};

// 유저 정보 조회
export const getUserInfo = async () => {
  const response = await CLIENT.get(`/mypage`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
    },
  });
  return response;
};

export const localLogin = async (email, password) => {
  const response = await CLIENT.post(
    '/user/login',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).catch(err => {
    console.error(err);
    toast.error(TOAST_MESSAGE.INCORRECT_ID_PWD, TOAST_OPTION);
    return err;
  });

  const accessToken = response?.data?.data;
  localStorage.setItem('jwt_token', accessToken);

  return response.status;
};
