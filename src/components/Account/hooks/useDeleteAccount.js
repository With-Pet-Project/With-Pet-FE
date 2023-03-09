import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { ACCESS_CLIENT } from 'lib/APIs/client';

export const deleteAccount = async (id, petId) => {
  // const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await ACCESS_CLIENT.delete(
    `/pet/${petId}/consumption/${id}`,
  );
  return data;
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(({ id, petId }) => deleteAccount(id, petId), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.account]);
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
    },
  });
  return mutate;
};
