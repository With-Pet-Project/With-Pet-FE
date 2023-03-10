import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import CLIENT from 'lib/APIs/client';

const INITIAL_INDEX = 0;

const updateUser = async (jwt, newProfile) => {
  const response = CLIENT({
    method: 'patch',
    url: '/mypage',
    data: newProfile,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};

export const useUpdateProfile = (selectUser = f => f) => {
  const queryClient = useQueryClient();
  const jwt = localStorage.getItem('jwt_token') || null;
  const { UserInfo } = QUERY_KEY;

  const { mutate } = useMutation({
    mutationFn: newProfile => updateUser(jwt, newProfile),
    // onMutate: async newProfile => {
    //   // 진행중인 query 전부 취소.
    //   await queryClient.cancelQueries({ queryKey: [UserInfo, jwt] });

    //   // update 전 상태 저장
    //   const prevState = queryClient.getQueryData([UserInfo, jwt]);
    //   const prevPetIdx = INITIAL_INDEX;
    //   // update가 성공했을 경우의 상태 저장
    //   queryClient.setQueryData([UserInfo, jwt], old => {
    //     selectUser(0);
    //     // let array = old.data.data;
    //     // array = old.data.data.filter(pet => pet.id !== UserInfo.id);
    //     return old;
    //   });

    //   return { prevState, prevPetIdx };
    // },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: err => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
      // queryClient.setQueryData([UserInfo, jwt], context.prevState);
      // selectUser(context.prevPetIdx);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserInfo, jwt] });
    },
  });

  return { mutate };
};
