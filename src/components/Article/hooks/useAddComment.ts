/* eslint-disable camelcase */
import {
  useMutation,
  useQueryClient,
  UseMutateFunction,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_OPTION } from 'components/common/Toast/toast';
import { postCreateComment } from 'lib/APIs/comment';
import { useParams } from 'react-router-dom';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { AxiosResponse } from 'axios';

interface MutationFnParams {
  content: string;
  commentId?: number | null;
}

interface AddCommentMutate {
  mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    MutationFnParams,
    unknown
  >;
}

export function useAddComment(): AddCommentMutate {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { articleId } = useParams();

  const { mutate } = useMutation({
    mutationFn: ({ content, commentId = null }: MutationFnParams) =>
      postCreateComment(jwt_token, articleId, content, commentId),
    onSuccess: () => {
      toast.success('댓글이 추가되었습니다.', TOAST_OPTION);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.Article],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.Reply],
      });
    },
    onError: () => {
      toast.error(
        '로그아웃 상태 혹은 서버와 통신이 원활하지 않습니다.',
        TOAST_OPTION,
      );
    },
  });

  return { mutate };
  /* jwt,
  articleId,
  content,
  commentId = null,
  */
}
