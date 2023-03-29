/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchUpdateComment } from 'lib/APIs/comment';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useParams } from 'react-router-dom';
// jwt, commentId, content

interface MutationFnParams {
  content: string;
  commentId: number;
}

export function useEditComment() {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { articleId } = useParams();

  const { mutate } = useMutation({
    mutationFn: ({ content, commentId }: MutationFnParams) =>
      patchUpdateComment(jwt_token, commentId, content),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.UPDATE_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.Article, articleId],
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.UPDATE_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
