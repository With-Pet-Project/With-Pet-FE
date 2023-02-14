import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';

export const useArticles = (tag, city, filter = null) => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isFetching,
    isError,
    error,
    ...result
  } = useInfiniteQuery({
    queryKey: queryKeys.filter(tag, city, filter),
    queryFn: ({ pageParam = 1 }) =>
      getArticleList(...queryKeys.filter(tag, city, filter), pageParam),
    getNextPageParam: lastPage => (lastPage < 3 ? lastPage + 1 : undefined),
    getPreviousPageParam: firstPage =>
      firstPage > 1 ? firstPage - 1 : undefined,
  });
};
