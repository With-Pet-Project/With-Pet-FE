import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ArticlePage } from 'lib/types/types';

export const useArticles = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { Article } = QUERY_KEY;

  const tag = searchParams.get('tag');
  const firstPlace = searchParams.get('firstPlace');
  const secondPlace = searchParams.get('secondPlace');
  const priority = searchParams.get('priority');
  const search = searchParams.get('search') || '';

  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: [Article, { tag, firstPlace, secondPlace, priority, search }],
    queryFn: ({ pageParam = 0 }) =>
      getArticleList(
        tag,
        priority,
        firstPlace,
        secondPlace,
        pageParam,
        search,
        5,
      ),
    getNextPageParam: (lastPage: ArticlePage) =>
      lastPage?.hasNext ? lastPage.lastArticleId : undefined,
    enabled: !!priority,
  });

  const pages = data?.pages;
  return {
    fetchNextPage,
    hasNextPage,
    pages,
    setSearchValue,
  };
};
