/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getReadMonthlyDiary } from 'lib/APIs/diary';
import { useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';

export function useDiary() {
  const { Diary } = QUERY_KEY;
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);

  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));

  const [diaryOfDay, setDiaryOfDay] = useState();

  const { data } = useQuery({
    queryKey: [Diary, jwt_token, petId, year, month],
    queryFn: () => getReadMonthlyDiary(jwt_token, petId, year, month),
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
    enabled: !!year && !!month && !!petId,
  });

  useEffect(() => {
    const selectedDiary = data?.data?.data.filter(
      d => d.year === year && d.month === month && d.day === day,
    );

    setDiaryOfDay(selectedDiary?.length ? selectedDiary[0] : null);
  }, [year, day, month, data, petId]);

  return diaryOfDay;
}
// jwt, petId, year, month
