/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment } from 'lib/APIs/comment';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

// jwt, commentId

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;

  const { mutate } = useMutation({
    mutationFn: commentId => deleteComment(jwt_token, commentId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Article] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
