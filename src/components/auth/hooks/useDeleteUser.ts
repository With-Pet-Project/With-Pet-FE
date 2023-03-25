import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { deleteUser } from 'lib/APIs/deleteUser';

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const jwt = localStorage.getItem('jwt_token');
  const { UserInfo } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: () => deleteUser(jwt),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
      localStorage.removeItem('jwt_token');
    },
    onError: err => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
      console.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserInfo] });
    },
  });

  return { mutate };
}
