import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import CLIENT from 'lib/APIs/client';

// const updateAccount = async values => {
//   console.log(values);
//   const { data } = await axios.patch('/consumption', values);
//   return data;
// };

const updateAccount = async values => {
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.put(
    `/pet/37/consumption/${values.id}`,
    values,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
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
