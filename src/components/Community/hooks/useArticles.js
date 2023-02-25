import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';

export const useArticles = (
  tag,
  firstPlace = null,
  secondPlace = null,
  criteria = null,
) => {
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
    queryKey: [article, tag, firstPlace, secondPlace, criteria],
    queryFn: ({ pageParam = 1 }) =>
      getArticleList(pageParam, tag, firstPlace, secondPlace, criteria),
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
