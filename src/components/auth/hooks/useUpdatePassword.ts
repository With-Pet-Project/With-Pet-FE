import { TOAST_OPTION } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import {
  useQueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import updatePassword from 'lib/APIs/updatePassword';

interface ValuesProps {
  email: string;
  password: string;
}

function useUpdatePassword(): UseMutateFunction<
  any,
  unknown,
  ValuesProps,
  unknown
> {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (values: ValuesProps) => updatePassword(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.account]);
        toast.success('변경되었습니다. 로그인하세요', TOAST_OPTION);
      },
      onError: err => {
        console.error(err);
        toast.error('비밀번호 재설정에 실패하였습니다.', TOAST_OPTION);
      },
    },
  );

  return mutate;
}

export default useUpdatePassword;
