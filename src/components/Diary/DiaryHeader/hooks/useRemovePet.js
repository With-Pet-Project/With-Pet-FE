/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePetInfo } from 'lib/APIs/pet';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function useRemovePet() {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token');
  const { PetInfoList } = QUERY_KEY;

  // optimistic upates
  const { mutate } = useMutation({
    mutationFn: petId => deletePetInfo(jwt_token, petId),
    onMutate: async petId => {
      // 진행중인 query 전부 취소.
      await queryClient.cancelQueries({ queryKey: [PetInfoList, jwt_token] });

      // update 전 상태 저장
      const prevState = queryClient.getQueryData([PetInfoList, jwt_token]);

      // update가 성공했을 경우의 상태 저장
      queryClient.setQueryData([PetInfoList, jwt_token], old => {
        return {
          ...old,
          data: {
            ...old.data,
            data: [...old.data.data.filter(pet => pet.id !== petId)],
          },
        };
      });

      return { prevState };
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
    },
    onError: (err, newState, context) => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
      queryClient.setQueryData([PetInfoList, jwt_token], context.prevState);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [PetInfoList, jwt_token] });
    },
  });

  return { mutate };
}
