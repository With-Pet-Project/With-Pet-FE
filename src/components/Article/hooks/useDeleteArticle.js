/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { deleteArticle } from 'lib/APIs/article';
import { useParams, useNavigate } from 'react-router-dom';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

// jwt, articleId
export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { articleId } = useParams();

  const { mutate: deleteArticleMutate } = useMutation({
    mutationFn: () => deleteArticle(jwt_token, articleId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.DELETE_SUCCESS, TOAST_OPTION);
      navigate(-1, { replace: true });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Article] });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.DELETE_FAIL, TOAST_OPTION);
    },
  });

  return { deleteArticleMutate };
}
