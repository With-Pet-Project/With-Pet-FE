import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import axios from 'axios';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';

const addAccount = async ({
  petId,
  feed,
  toy,
  hospital,
  beauty,
  etc,
  date,
}) => {
  const { data } = await axios.post('/consumption', {
    petId,
    feed,
    toy,
    hospital,
    beauty,
    etc,
    date,
  });
  return data;
};
//  isLoading이 계속 false로 뜨고 간간히 됨
export const useAddAccount = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ petId, feed, toy, hospital, beauty, etc, date }) =>
      addAccount({ petId, feed, toy, hospital, beauty, etc, date }),
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
