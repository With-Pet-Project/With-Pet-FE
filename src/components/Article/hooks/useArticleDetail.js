import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { useParams } from 'react-router-dom';
import { getReadArticleDetail } from 'lib/APIs/article';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function useArticleDetail() {
  const { Article } = QUERY_KEY;
  const { articleId } = useParams();

  const { data } = useQuery({
    queryKey: [Article, articleId],
    queryFn: () => getReadArticleDetail(articleId),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
    enabled: !!articleId,
  });

  const articleInfo = data?.data?.data;

  return articleInfo;
}
