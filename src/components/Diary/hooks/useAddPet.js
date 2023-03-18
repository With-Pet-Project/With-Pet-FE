/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCreatePetInfo } from 'lib/APIs/pet';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

export function useAddPet() {
  // name, initWeight, birthday, jwt
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const queryClient = useQueryClient();
  const { PetInfoList } = QUERY_KEY;

  const key = [PetInfoList];

  const { mutate } = useMutation({
    mutationFn: ({ name, initWeight, birthday }) =>
      postCreatePetInfo(name, initWeight, birthday, jwt_token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...key] });
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
