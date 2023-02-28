/* eslint-disable camelcase */
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getPetInfoById } from 'lib/APIs/pet';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function usePetById() {
  const [petIdParams, setPetIdParams] = useSearchParams();

  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { PetInfoById } = QUERY_KEY;

  const { data } = useQuery({
    queryKey: [PetInfoById],
    queryFn: () => getPetInfoById(petIdParams.get('petId')),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
  });

  return data;
}
