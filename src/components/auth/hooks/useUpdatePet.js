/* eslint-disable camelcase */
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { updatePet } from 'lib/APIs/pet';

const INITIAL_INDEX = 0;

export const useUpdatePet = (selectPet = f => f) => {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { PetInfoList } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: newPet => updatePet(jwt_token, newPet),
    onMutate: async newPet => {
      // 진행중인 query 전부 취소.
      await queryClient.cancelQueries({ queryKey: [PetInfoList] });

      // update 전 상태 저장
      const prevState = queryClient.getQueryData([PetInfoList]);
      const prevPetIdx = INITIAL_INDEX;
      // update가 성공했을 경우의 상태 저장
      queryClient.setQueryData([PetInfoList], old => {
        selectPet(0);
        let array = old.data.data;
        array = old.data.data.filter(pet => pet.id !== newPet.id);
        return old;
      });

      return { prevState, prevPetIdx };
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
      queryClient.setQueryData([PetInfoList], context.prevState);
      selectPet(context.prevPetIdx);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [PetInfoList] });
    },
  });

  return { mutate };
};
