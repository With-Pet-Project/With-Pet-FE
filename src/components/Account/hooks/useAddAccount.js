import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import CLIENT from 'lib/APIs/client';

const addAccount = async ({
  petId,
  feed,
  toy,
  hospital,
  beauty,
  etc,
  day,
  month,
  year,
}) => {
  const tempPetId = 37;
  const jwt = localStorage.getItem('jwt_token') || null;
  const { data } = await CLIENT.post(
    `/pet/${tempPetId}/consumption`,
    {
      feed: Number(feed),
      toy: Number(toy),
      hospital: Number(hospital),
      beauty: Number(beauty),
      week: 1,
      etc: Number(etc),
      day: Number(day),
      month: Number(month),
      year: Number(year),
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return data;
};

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
