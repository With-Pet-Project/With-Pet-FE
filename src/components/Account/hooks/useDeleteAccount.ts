import {
  useQueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { deleteAccount } from 'lib/APIs/account';

interface UseDeleteAccount {
  id: number;
  petId: number | string;
}

export const useDeleteAccount = (): UseMutateFunction<
  any,
  unknown,
  UseDeleteAccount,
  unknown
> => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ id, petId }: UseDeleteAccount) => deleteAccount(id, petId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
        toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
      },
      onError: () => {
        toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
      },
    },
  );
  return mutate;
};
