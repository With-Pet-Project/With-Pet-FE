import CLIENT from './client';

export const isValidateNickName = async value => {
  const jwt = localStorage.getItem('jwt_token') || null;

  const response = await CLIENT({
    method: 'get',
    url: `/user/duplicate-check?nickName=${value}`,
    headers: {
      // Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  }).catch(error => {
    return error.response;
  });
  console.log(response);

  return response?.status === 200;
};
