/* eslint-disable camelcase */
import { patchEditArticle } from 'lib/APIs/article';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

export function useEditArticle() {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const tag = searchParams.get('tag');
  const firstPlace = searchParams.get('firstPlace');
  const secondPlace = searchParams.get('secondPlace');

  const articleKey = [QUERY_KEY.Article];
  const userKey = [QUERY_KEY.UserInfo];

  const { mutate } = useMutation({
    mutationFn: ({ title, content, imgUrl }) =>
      patchEditArticle(
        jwt_token,
        title,
        firstPlace,
        secondPlace,
        content,
        imgUrl,
        articleId,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...articleKey] });
      queryClient.invalidateQueries({ queryKey: [...userKey] });
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      navigate('/community', { replace: true });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}

/* jwt,
  title,
  place1,
  place2,
  detailText,
  articleId,
*/
