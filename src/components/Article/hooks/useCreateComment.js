/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { postCreateComment } from 'lib/APIs/comment';
import { useParams } from 'react-router-dom';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

export function useCreateComment() {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { articleId } = useParams();

  const { mutate: commentMutate } = useMutation({
    mutationFn: ({ content, commentId = null }) =>
      postCreateComment(jwt_token, articleId, content, commentId),
    onSuccess: () => {
      toast.success('댓글이 추가되었습니다.', TOAST_OPTION);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.Article],
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { commentMutate };
  /* jwt,
  articleId,
  content,
  commentId = null,
  */
}
