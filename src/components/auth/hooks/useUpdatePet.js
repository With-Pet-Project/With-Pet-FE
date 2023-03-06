import { useQueryClient, useMutation } from '@tanstack/react-query';
import CLIENT from 'lib/APIs/client';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

const INITIAL_INDEX = 0;

const updatePet = async (jwt, newPet) => {
  console.log(newPet);
  const { data } = await CLIENT.put(`/pet/${newPet.id}`, newPet, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  return data;
};

export const useUpdatePet = (selectPet = f => f) => {
  const queryClient = useQueryClient();
  const jwt = localStorage.getItem('jwt_token') || null;
  const { PetInfoList } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: newPet => updatePet(jwt, newPet),
    onMutate: async newPet => {
      // 진행중인 query 전부 취소.
      await queryClient.cancelQueries({ queryKey: [PetInfoList, jwt] });

      // update 전 상태 저장
      const prevState = queryClient.getQueryData([PetInfoList, jwt]);
      const prevPetIdx = INITIAL_INDEX;
      // update가 성공했을 경우의 상태 저장
      queryClient.setQueryData([PetInfoList, jwt], old => {
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
      queryClient.setQueryData([PetInfoList, jwt], context.prevState);
      selectPet(context.prevPetIdx);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [PetInfoList, jwt] });
    },
  });

  return { mutate };
};
