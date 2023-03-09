/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { postAddChallenge } from 'lib/APIs/challenge';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useContext } from 'react';
import { petIdContext } from '../context/PetContext';

export function useAddChallenge() {
  const [petId, setPetId] = useContext(petIdContext);
  const queryClient = useQueryClient();
  // const jwt_token = localStorage.getItem('jwt_token') || null;
  const { DailyChallenge } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: ({ title, targetCnt }) =>
      postAddChallenge(petId, title, targetCnt),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [DailyChallenge] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
