import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';

export const deleteAccount = async id => {
  const { data } = await axios.delete(`/consumption/${id}`);
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
