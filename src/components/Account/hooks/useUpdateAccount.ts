import {
  useQueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { updateAccount } from 'lib/APIs/account';
import { AccountCalender } from 'lib/types/types';

interface ValueProps extends AccountCalender {
  year: number | string;
  month: number;
  week: 1;
  petId: number;
}

export const useUpdateAccount = (): UseMutateFunction<
  any,
  unknown,
  ValueProps,
  unknown
> => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (values: ValueProps) => updateAccount(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
        toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
      },
      onError: () => {
        toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
      },
    },
  );

  return mutate;
};
