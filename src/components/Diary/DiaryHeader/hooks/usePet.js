/* eslint-disable camelcase */
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getAllPetInfo } from 'lib/APIs/pet';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function usePet(petId = null) {
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { PetInfoList } = QUERY_KEY;

  const { data: petInfoList } = useQuery({
    queryKey: [PetInfoList, jwt_token],
    queryFn: () => getAllPetInfo(jwt_token, petId),
    enabled: !!jwt_token,
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
      window.location.replace('/');
    },
  });

  return petInfoList?.data?.data;
}
