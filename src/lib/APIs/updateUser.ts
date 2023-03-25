import CLIENT from 'lib/APIs/client';

export const updateUser = async (jwt, newProfile) => {
  console.log(newProfile);
  const response = CLIENT({
    method: 'patch',
    url: '/mypage',
    data: newProfile,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return response;
};
