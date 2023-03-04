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
  const day = Number(searchParams.get('day'));

  // jwt, petId, year, month => 3월로 보내면 서버에 2월로 저장
  // API 함수에서 month - 1
  const { data: petHealth } = useQuery({
    queryKey: [PetHealth, jwt_token, petId, year, month],
    queryFn: () => getHealthInfo(jwt_token, petId, year, month),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
    staleTime: 20 * 1000 * 60,
    cacheTime: 25 * 1000 * 60,
    enabled: !!petId && !!year && !!month,
  });

  const data = petHealth?.data?.data;

  let dayInfo = data?.filter(
    d => d.year === year && d.month === month && d.day === day,
  );
  dayInfo = dayInfo?.length ? dayInfo[0] : null;

  const avgWalkDist = data?.length
    ? data.reduce((acc, cur) => acc + cur.walkDistance, 0) / data.length
    : 0;

  const avgWeight = data?.length
    ? data.reduce((acc, cur) => acc + cur.weight, 0) / data.length
    : 0;

  return { dayInfo, avgWalkDist, avgWeight };
}
