import CLIENT from './client';

export const getKakaoUserLoginToken = async code => {
  const response = await CLIENT.post(`/kakako/login?code=${code}`);

  return response;
};

export const getUserInfo = async jwt => {
  const response = await CLIENT.get(`/mypage`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};
