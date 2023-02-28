/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { postAddChallenge } from 'lib/APIs/challenge';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function useAddChallenge() {
  const [petIdParams, setPetIdParams] = useSearchParams();
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { Challenge } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: ({ title, targetCnt }) =>
      postAddChallenge(jwt_token, petIdParams.get('petId'), title, targetCnt),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      // queryKey: [QUERY_KEY.Challenge, jwt] invalidateQuery
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
