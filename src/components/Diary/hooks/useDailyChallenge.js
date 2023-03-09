/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getDailyChallenge } from 'lib/APIs/challenge';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { whatWeek } from '../util/diary';
import { petIdContext } from '../context/PetContext';

export const useDailyChallenge = () => {
  const { DailyChallenge } = QUERY_KEY;
  // const jwt_token = localStorage.getItem('jwt_token') || null;
  const [searchParams, setSearchParams] = useSearchParams();

  const [petId, setPetId] = useContext(petIdContext);

  const year = searchParams.get('year');
  const month = searchParams.get('month'); // 1 ~ 12
  const day = searchParams.get('day');

  const week = whatWeek(year, month, day);

  const { data: dailyChallenge } = useQuery({
    queryKey: [DailyChallenge, Number(year), Number(month), Number(day), petId],
    queryFn: () =>
      getDailyChallenge(petId, year, Number(month), Number(day), week),
    onError: () => {
      if (petId === null) {
        // window.location.replace('/');
      }
    },
    enabled: !!petId && !!week && !!year && !!month && !!day,
  });

  const daily = dailyChallenge?.data?.data;

  return { daily };
};
