import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import CLIENT from 'lib/APIs/client';

// export const deleteAccount = async id => {
//   const { data } = await axios.delete(`/consumption/${id}`);
//   return data;
// };

export const deleteAccount = async id => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.delete(`/pet/37/consumption/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return data;
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(id => deleteAccount(id), {
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
