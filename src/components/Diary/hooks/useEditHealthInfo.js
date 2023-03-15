/* eslint-disable camelcase */
import { putEditHealthInfo } from 'lib/APIs/health';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { petIdContext } from '../context/PetContext';

export function useEditHealthInfo() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const [petId, setPetId] = useContext(petIdContext);
  const { PetHealth } = QUERY_KEY;

  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const petHealthKey = [
    PetHealth,
    jwt_token,
    petId,
    Number(year),
    Number(month),
  ];

  const { mutate } = useMutation({
    mutationFn: ({ ...healthInfo }) =>
      putEditHealthInfo(jwt_token, petId, {
        ...healthInfo,
      }),
    onMutate: async ({ ...healthInfo }) => {
      await queryClient.cancelQueries({ queryKey: [...petHealthKey] });
      const prevState = queryClient.getQueryData([...petHealthKey]);
      queryClient.setQueryData([...petHealthKey], old => {
        let info = old.data.data;
        info = old.data.data.map(d => {
          if (d.id === healthInfo.id) {
            return {
              ...d,
              ...healthInfo,
            };
          }
          return d;
        });
        return {
          ...old,
          data: {
            ...old.data,
            data: info,
          },
        };
      });
      return { prevState };
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
    },
    onError: (err, newState, context) => {
      queryClient.setQueryData([...petHealthKey], context.prevState);
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [...petHealthKey] });
    },
  });

  return { mutate };
}

/**
 * jwt,
  petId,
  healthInfoId,
  { ...healthInfo },
 */
