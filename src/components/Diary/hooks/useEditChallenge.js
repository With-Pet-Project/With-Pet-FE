/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { putEditChallenge } from 'lib/APIs/challenge';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useSearchParams } from 'react-router-dom';
import { petIdContext } from '../context/PetContext';

// jwt, title, targetCnt, petId, challengeId
export function useEditChallenge() {
  const queryClient = useQueryClient();
  // const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));

  const dailyKey = [QUERY_KEY.DailyChallenge, year, month, day, petId];

  const weeklyKey = [QUERY_KEY.WeeklyChallenge, petId, year, month, day];

  const editChallenge = useMutation({
    mutationFn: ({ title, targetCnt, challengeId }) =>
      putEditChallenge(title, targetCnt, petId, challengeId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [...dailyKey] });
      queryClient.invalidateQueries({ queryKey: [...weeklyKey] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
  });

  return editChallenge;
}
