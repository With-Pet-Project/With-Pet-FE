import { TOAST_OPTION } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
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

export const requestConfirm = async email => {
  const toastId = toast.loading('이메일을 전송하는 중입니다.', {
    ...TOAST_OPTION,
    position: toast.POSITION.TOP_CENTER,
  });

  const response = await CLIENT.post(`/request-confirm?requestEmail=${email}`)
    .then(res => {
      toast.update(toastId, {
        ...TOAST_OPTION,
        type: 'success',
        render: '이메일을 전송에 성공했습니다.',
        isLoading: false,
        position: toast.POSITION.TOP_CENTER,
      });
      return res;
    })
    .catch(err => {
      toast.update(toastId, {
        ...TOAST_OPTION,
        type: 'error',
        render: '유효하지 않은 이메일 입니다.',
        isLoading: false,
        position: toast.POSITION.TOP_CENTER,
      });
      return err.response;
    });

  return response?.status === 200;
};

export const checkConfirm = async (email, key) => {
  const response = await CLIENT.get(
    `/check-confirm?requestEmail=${email}&key=${key}`,
  )
    .then(res => {
      toast.success('확인되었습니다.', TOAST_OPTION);
      return res;
    })
    .catch(err => {
      toast.error(
        '인증코드가 일치하지 않습니다. 처음부터 다시 진행해주세요',
        TOAST_OPTION,
      );
      return err.response;
    });

  return response?.status === 200;
};

export const updatePassword = async value => {
  const response = await CLIENT({
    method: 'patch',
    url: `/user/password?password=${value}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(error => {
    return error.response;
  });
  console.log(response);

  return response?.status === 200;
};
