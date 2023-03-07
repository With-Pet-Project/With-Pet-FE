/* eslint-disable camelcase */
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useParams } from 'react-router-dom';
import { patchEditArticle } from 'lib/APIs/article';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useArticleDetail } from './useArticleDetail';

export function useEditArticle() {
  const queryClient = useQueryClient();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const article = useArticleDetail();
  const { Article } = QUERY_KEY();

  const key = [Article, article];
  const modifiedArticle = {};

  const { mutate: EditArticleMutate } = useMutation({
    mutationFn: () => patchEditArticle(jwt_token, { ...modifiedArticle }),
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      queryClient.invalidateQueries({ queryKey: [...key] });
    },
  });

  return { EditArticleMutate };
}
