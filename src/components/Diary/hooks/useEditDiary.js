/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useSearchParams } from 'react-router-dom';
import { putEditDiary } from 'lib/APIs/diary';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';
import { whatWeek } from '../util/diary';

export function useEditDiary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);

  const queryClient = useQueryClient();

  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));
  const week = whatWeek(day);

  const { mutate } = useMutation({
    mutationFn: ({ ...diary }) => putEditDiary(jwt_token, petId, { ...diary }),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Diary] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}

/*
 jwt,
  petId,
  diaryId,
  { content, year, month, day, week },
*/
