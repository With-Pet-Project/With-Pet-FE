/* eslint-disable camelcase */
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getWeeklyChallenge } from 'lib/APIs/challenge';
import { petIdContext } from '../context/PetContext';

export function useWeeklyChallenge(year, month, week) {
  const [petId, setPetId] = useContext(petIdContext);
  const { WeeklyChallenge } = QUERY_KEY;
  const jwt_token = localStorage.getItem('jwt_token') || null;

  // jwt, petId, year, month, week
  const { data: weeklyChallenge } = useQuery({
    queryKey: [WeeklyChallenge, jwt_token, petId, year, month, week],
    queryFn: () => getWeeklyChallenge(jwt_token, petId, year, month, week),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
    enabled: !!jwt_token && !!petId,
  });

  const weekly = weeklyChallenge?.data?.data || null;

  return { weekly };
}
