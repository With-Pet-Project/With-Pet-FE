import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';

export const useArticles = (tag, city, priority = null) => {
  const { article } = queryKeys;

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    data,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [article.filters(tag, city, priority)],
    queryFn: ({ pageParam = 1 }) =>
      getArticleList(pageParam, article.filters(tag, city, priority)),
    getNextPageParam: lastPage =>
      !lastPage.data.data.isLast ? lastPage.data.data.pageNum + 1 : undefined,
  });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    data,
    isLoading,
  };
};
