/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { postCheckChallenge, deleteUncheckChallenge } from 'lib/APIs/challenge';
import { useContext } from 'react';
import { whatWeek } from 'lib/utils/diary';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
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
  const week = whatWeek(year, month, day);

  const check = useMutation({
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
          jwt_token,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
      });

      const prevState = queryClient.getQueryData([
        DailyChallenge,
        jwt_token,
        Number(year),
        Number(month),
        Number(day),
        petId,
      ]);

      queryClient.setQueryData(
        [
          DailyChallenge,
          jwt_token,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
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
        [
          DailyChallenge,
          jwt_token,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
        context.prevState,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          DailyChallenge,
          jwt_token,
          Number(year),
          Number(month),
          Number(day),
          petId,
        ],
      });
    },
  });

  return check;
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
