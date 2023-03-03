/* eslint-disable camelcase */
import { postHealthInfo } from 'lib/APIs/health';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';
import { whatWeek } from '../util/diary';

export function useAddHealthInfo() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);
  const { PetHealth } = QUERY_KEY;

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const petHealthKey = [
    PetHealth,
    jwt_token,
    petId,
    Number(year),
    Number(month),
    // Number(day),
  ];

  const healthInfo = {
    year: Number(year),
    month: Number(month),
    week: whatWeek(Number(year), Number(month), Number(day)),
    day: Number(day),
    date: `${year}-${month}-${day}`,
  };

  const addHealthInfo = useMutation({
    mutationFn: ({
      walkDistance,
      weight,
      drinkAmount,
      feedAmount,
      diary = '',
    }) =>
      postHealthInfo(jwt_token, petId, {
        ...healthInfo,
        walkDistance,
        weight,
        drinkAmount,
        feedAmount,
        diary,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...petHealthKey] });
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });
  return addHealthInfo;
}
/*
{
    "walkDistance":3.18,
    "weight":3.18,
    "drinkAmount":3.18,
    "feedAmount":3.18,
    "diary":"다이어리!",
    "year":2023,
    "month":2,
    "week":3,
    "day":21,
    "date":"2023-02-21"
}
*/
