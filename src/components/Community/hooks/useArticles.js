import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getArticleList } from 'lib/APIs/article';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const useArticles = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { Article } = QUERY_KEY;

  const tag = searchParams.get('tag');
  const firstPlace = searchParams.get('firstPlace');
  const secondPlace = searchParams.get('secondPlace');
  const priority = searchParams.get('priority');

  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: [
      Article,
      { tag, firstPlace, secondPlace, priority, searchValue },
    ],
    queryFn: ({ lastArticleId = 0 }) =>
      getArticleList(
        tag,
        priority,
        firstPlace,
        secondPlace,
        lastArticleId,
        searchValue,
        10,
      ),
    getNextPageParam: lastPage => {
      // console.log(lastPage.data.data.lastArticleId);
      return lastPage?.data?.data.hasNext
        ? Number(lastPage.data.data.lastArticleId) + 9
        : undefined;
    },
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
