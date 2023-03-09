/* eslint-disable camelcase */
import { getHealthInfo } from 'lib/APIs/health';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';
import { usePetById } from './usePetById';

export function useHealthInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);
  const petInfo = usePetById();

  const { PetHealth } = QUERY_KEY;
  const year = Number(searchParams.get('year'));
  const month = Number(searchParams.get('month'));
  const day = Number(searchParams.get('day'));

  // jwt, petId, year, month => 3월로 보내면 서버에 2월로 저장
  // API 함수에서 month - 1
  const { data: petHealth } = useQuery({
    queryKey: [PetHealth, petId, year, month],
    queryFn: () => getHealthInfo(petId, year, month),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
    staleTime: 20 * 1000 * 60,
    cacheTime: 25 * 1000 * 60,
    enabled: !!petId && !!year && !!month,
  });

  const data = petHealth?.data?.data;
  const [dayInfo, setDayInfo] = useState(null);
  const [avgWalkDist, setAvgWalkDist] = useState(null);
  const [avgWeight, setAvgWeight] = useState(null);

  useEffect(() => {
    const monthData = data?.filter(
      d => d.year === year && d.month === month && d.day === day,
    );

    setDayInfo(monthData?.length ? monthData[0] : null);

    setAvgWalkDist(
      data?.length
        ? parseFloat(
            data.reduce((acc, cur) => acc + cur.walkDistance, 0) / data.length,
          ).toFixed(2)
        : 0,
    );

    setAvgWeight(
      data &&
        parseFloat(
          data.reduce(
            (acc, cur) => acc + cur.weight,
            petInfo ? petInfo.initWeight : 0,
          ) / (petInfo ? data.length + 1 : data.length),
        ).toFixed(2),
    );
  }, [data, year, month, day, petInfo]);

  return { dayInfo, avgWalkDist, avgWeight };
}
