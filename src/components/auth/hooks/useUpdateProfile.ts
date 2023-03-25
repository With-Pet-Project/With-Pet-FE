import {
  useQueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { updateUser } from 'lib/APIs/updateUser';
import { AxiosResponse } from 'axios';

export const useUpdateProfile = (): UseMutateFunction<
  AxiosResponse<any, any>,
  unknown,
  any,
  unknown
> => {
  const queryClient = useQueryClient();
  const jwt = localStorage.getItem('jwt_token') || null;
  const { UserInfo } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: newProfile => updateUser(jwt, newProfile),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: err => {
      console.error(err);
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserInfo] });
    },
  });

  return mutate;
};
