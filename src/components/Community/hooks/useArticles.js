import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';
import { useSearchParams } from 'react-router-dom';

export const useArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { Article } = QUERY_KEY;

  const tag = searchParams.get('tag');
  const firstPlace = searchParams.get('firstPlace');
  const secondPlace = searchParams.get('secondPlace');
  const priority = searchParams.get('priority');

  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: [Article, { tag, firstPlace, secondPlace, priority }],
    queryFn: ({ lastArticleId = 0 }) =>
      getArticleList(tag, priority, firstPlace, secondPlace, lastArticleId, 10),
    getNextPageParam: lastPage =>
      lastPage?.data?.data.hasNext
        ? lastPage.data.data.lastArticleId + 9
        : undefined,
    enabled: !!priority,
  });

  const pages = data?.pages;

  return {
    fetchNextPage,
    hasNextPage,
    pages,
  };
};
