import {
  useQueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { addAccount } from 'lib/APIs/account';

interface UseAddAccount {
  petId: string;
  year: string;
  month: string;
  day: number;
  feed: number;
  toy: number;
  hospital: number;
  beauty: number;
  etc: number;
}

export const useAddAccount = (): UseMutateFunction<
  any,
  unknown,
  UseAddAccount,
  unknown
> => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({
      petId,
      feed,
      toy,
      hospital,
      beauty,
      etc,
      day,
      month,
      year,
    }: UseAddAccount) =>
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
