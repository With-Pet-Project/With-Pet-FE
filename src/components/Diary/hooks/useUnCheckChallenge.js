/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUncheckChallenge } from 'lib/APIs/challenge';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { petIdContext } from '../context/PetContext';

// jwt, petId, challengeLogId
export function useUnCheckChallenge() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);
  const { DailyChallenge } = QUERY_KEY;

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const key = [
    DailyChallenge,
    jwt_token,
    Number(year),
    Number(month),
    Number(day),
    petId,
  ];

  const { mutate } = useMutation({
    mutationFn: challengeLogId =>
      deleteUncheckChallenge(jwt_token, petId, challengeLogId),
    onMutate: async challengeLogId => {
      await queryClient.cancelQueries({
        queryKey: [...key],
      });
      const prevState = queryClient.getQueryData([...key]);

      queryClient.setQueriesData([...key], old => {
        let daily = old.data.data;
        daily = daily.filter(d => d.challengeLogId !== challengeLogId);

        return old;
      });

      return { prevState };
    },
    onError: (err, challengeLogId, context) => {
      queryClient.setQueryData([...key], context.prevState);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [...key] });
    },
  });

  return { mutate };
}
