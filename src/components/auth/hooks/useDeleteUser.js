/* eslint-disable camelcase */
import CLIENT from 'lib/APIs/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

const deleteUser = async jwt => {
  // 성공하면 localStorage에서 jwt 삭제하기
  console.log(jwt);
  const response = await CLIENT.delete(`/user`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  console.log(response);
  return response;
};

export function useDeleteUser(selectUser = f => f) {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token');
  const { UserInfo } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: () => deleteUser(jwt_token),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
    },
    onError: (err, newState, context) => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
      // queryClient.setQueryData([UserInfo, jwt_token], context.prevState);
      // selectUser(context.prevPetIdx);
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserInfo, jwt_token] });
    },
  });

  return { mutate };
}
