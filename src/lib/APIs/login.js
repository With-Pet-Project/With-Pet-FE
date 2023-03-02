import CLIENT from './client';

// 카카오 토큰 얻는 함수
export const getKakaoUserLoginToken = async code => {
  const response = await CLIENT.post(
    `/user/kakao/login?code=${code}`,
    {},
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
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
