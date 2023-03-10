import axios from 'axios';
import CLIENT from './client';

// 카카오 토큰 얻는 함수
export const getKakaoUserLoginToken = async code => {
  const response = await CLIENT.post(`/user/login/kakao?code=${code}`, {
    redirectURI: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
  return response;
};

// 유저 정보 조회
export const getUserInfo = async jwt => {
  const response = await CLIENT.get(`/mypage`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
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
    console.log(err);
    alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
  });

  console.log(response);
  const { data: accessToken } = response.data;
  console.log(accessToken);
  localStorage.setItem('jwt_token', accessToken);
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return response;
};
