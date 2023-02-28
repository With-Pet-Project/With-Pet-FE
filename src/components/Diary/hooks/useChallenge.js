/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getDailyChallenge } from 'lib/APIs/challenge';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { whatWeek } from 'lib/utils/diary';
import { petIdContext } from '../context/PetContext';

export const useChallenge = () => {
  const { DailyChallenge, WeeklyChallenge } = QUERY_KEY;
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [searchParams, setSearchParams] = useSearchParams();

  const [petId, setPetId] = useContext(petIdContext);

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const week = whatWeek(year, month, day);

  const { data: dailyChallenge } = useQuery({
    queryKey: [DailyChallenge, jwt_token, year, month, day, petId],
    queryFn: () =>
      getDailyChallenge(
        jwt_token,
        petId,
        year,
        Number(month),
        Number(day),
        week,
      ),
    onError: () => {
      if (petId === null) {
        // window.location.replace('/');
      }
    },
    enabled: !!petId && !!week,
  });

  const daily = dailyChallenge?.data.data;

  return { daily };
};
