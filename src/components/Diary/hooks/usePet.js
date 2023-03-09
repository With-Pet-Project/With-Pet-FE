/* eslint-disable camelcase */
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getAllPetInfo } from 'lib/APIs/pet';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function usePet() {
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { PetInfoList } = QUERY_KEY;

  const { data: petInfoList } = useQuery({
    queryKey: [PetInfoList],
    queryFn: () => getAllPetInfo(),
    enabled: !!jwt_token,
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
      window.location.replace('/');
    },
    staleTime: 1000 * 60 * 30,
  });

  return petInfoList?.data?.data.sort((a, b) => a.name - b.name);
}
