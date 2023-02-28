/* eslint-disable camelcase */
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getPetInfoById } from 'lib/APIs/pet';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useContext } from 'react';
import { petIdContext } from '../context/PetContext';

export function usePetById() {
  const [petId, setPetId] = useContext(petIdContext);

  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { PetInfoById } = QUERY_KEY;

  const { data } = useQuery({
    queryKey: [PetInfoById],
    queryFn: () => getPetInfoById(jwt_token, petId),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
  });

  return data;
}
