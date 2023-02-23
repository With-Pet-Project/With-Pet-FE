import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';

const updateAccount = async values => {
  const { data } = await axios.patch('/consumption', values);
  return data;
};

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(values => updateAccount(values), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.account]);
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
  });

  return mutate;
};
