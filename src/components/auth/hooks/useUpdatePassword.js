import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import CLIENT from 'lib/APIs/client';

// 안되고있음
const updatePassword = async values => {
  console.log(values);

  const jwt = localStorage.getItem('jwt_token') || null;
  const response = await CLIENT.patch(`/user/password`, values, {
    headers: {
      // 'Content-Type': 'application/json',
    },
  });
  console.log(response);
  return response;
};

function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(values => updatePassword(values), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.account]);
      toast.success('변경되었습니다. 로그인하세요', TOAST_OPTION);
    },
    onError: err => {
      console.log(err);
      toast.error('비밀번호 재설정에 실패하였습니다.', TOAST_OPTION);
    },
  });

  return mutate;
}

export default useUpdatePassword;
