/* eslint-disable camelcase */
import { getHealthInfo } from 'lib/APIs/health';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';

export function useHealthInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);

  const { PetHealth } = QUERY_KEY;
  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));

  // jwt, petId, year, month

  const { data } = useQuery({
    queryKey: [PetHealth, jwt_token, petId, year, month],
    queryFn: () => getHealthInfo(jwt_token, petId, year, month),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
    enabled: !!petId && !!year && !!month,
  });

  console.log(data);
  return data;
}
