/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { postCheckChallenge } from 'lib/APIs/challenge';
import { useContext } from 'react';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { whatWeek } from '../util/diary';
import { petIdContext } from '../context/PetContext';

export function useCheckChallenge() {
  const queryClient = useQueryClient();
  const [petId, setPetId] = useContext(petIdContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { DailyChallenge } = QUERY_KEY;

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');
  const date = `${year}-${month}-${day}`;
  const week = whatWeek(day);

  const { mutate } = useMutation({
    mutationFn: challengeId =>
      postCheckChallenge(
        jwt_token,
        petId,
        challengeId,
        Number(year),
        Number(month),
        Number(day),
        week,
        date,
      ),
    onMutate: async challengeId => {
      await queryClient.cancelQueries({
        queryKey: [
          DailyChallenge,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
      });

      const prevState = queryClient.getQueryData([
        DailyChallenge,
        Number(year),
        Number(month),
        Number(day),
        petId,
      ]);

      queryClient.setQueryData(
        [DailyChallenge, Number(year), Number(month), Number(day), petId],
        old => {
          let daily = old.data.data;
          daily = daily.map(d => {
            if (d.challengeId === challengeId) {
              return {
                ...d,
                challengeLogId: true,
              };
            }
            return d;
          });
          return old;
        },
      );

      return { prevState };
    },
    onError: (err, challengeId, context) => {
      queryClient.setQueryData(
        [DailyChallenge, Number(year), Number(month), Number(day), petId],
        context.prevState,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          DailyChallenge,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
      });
    },
  });

  return { mutate };
}

/**
  jwt,
  petId,
  challengeId,
  year,
  month,
  day,
  week,
  date, // YYYY-MM-DD
*/
