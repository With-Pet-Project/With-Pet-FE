/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRemoveChallenge } from 'lib/APIs/challenge';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { petIdContext } from '../context/PetContext';

export function useRemoveChallenge() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);

  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));

  const dailyKey = [QUERY_KEY.DailyChallenge];
  const weeklyKey = [QUERY_KEY.WeeklyChallenge];

  // jwt, petId, challengeId
  const { mutate } = useMutation({
    mutationFn: challengeId =>
      deleteRemoveChallenge(jwt_token, petId, challengeId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [...dailyKey] });
      queryClient.invalidateQueries({ queryKey: [...weeklyKey] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
