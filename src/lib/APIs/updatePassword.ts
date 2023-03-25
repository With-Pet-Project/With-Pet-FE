import CLIENT from './client';

const updatePassword = async values => {
  const response = await CLIENT.patch(`/user/password`, values, {});
  return response;
};

export default updatePassword;
