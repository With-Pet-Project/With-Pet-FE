/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { postCreateDiary } from 'lib/APIs/diary';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';
import { whatWeek } from '../util/diary';

export function useAddDiary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);

  const queryClient = useQueryClient();

  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));
  const week = whatWeek(day);

  const { mutate } = useMutation({
    mutationFn: content =>
      postCreateDiary(jwt_token, petId, year, month, day, week, content),
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Diary] });
    },
  });

  return { mutate };
}

/*
  jwt,
  petId,
  year,
  month,
  day,
  week,
  content,
*/
