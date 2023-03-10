import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { addAccount } from 'lib/APIs/account';

export const useAddAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ petId, feed, toy, hospital, beauty, etc, day, month, year }) =>
      addAccount({ petId, feed, toy, hospital, beauty, etc, day, month, year }),
    {
      useErrorBoundary: false,
      retry: 0,
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
        toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      },
      onError: () => {
        toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
      },
    },
  );

  return mutate;
};
