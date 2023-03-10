/* eslint-disable camelcase */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { postCreateArticle } from 'lib/APIs/article';

export function useCreateArticle() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const jwt_token = localStorage.getItem('jwt_token') || null;

  const tag = searchParams.get('tag');
  const firstPlace = searchParams.get('firstPlace');
  const secondPlace = searchParams.get('secondPlace');

  const key = [
    QUERY_KEY.Article,
    { tag, firstPlace, secondPlace, priority: searchParams.get('priority') },
  ];

  const { mutate } = useMutation({
    mutationFn: ({ title, content, checkUrl }) =>
      postCreateArticle(
        jwt_token,
        title,
        tag,
        content,
        firstPlace,
        secondPlace,
        checkUrl,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...key] });
      toast.success(TOAST_MESSAGE.Add_SUCCESS, TOAST_OPTION);
      navigate('/community', { replace: true });
    },
    onError: () => {
      toast.error(TOAST_MESSAGE.ADD_FAIL, TOAST_OPTION);
    },
  });

  return { mutate };
}
