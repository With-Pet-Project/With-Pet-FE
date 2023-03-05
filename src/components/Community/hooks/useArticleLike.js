/* eslint-disable camelcase */
import { useParams, useSearchParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddArticleLike, deleteCanceArticlelLike } from 'lib/APIs/article';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

export function useArticleLike() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const jwt_token = localStorage.getItem('jwt_token') || null;

  const key = [
    QUERY_KEY.Article,
    {
      tag: searchParams.get('tag'),
      firstPlace: searchParams.get('firstPlace'),
      secondPlace: searchParams.get('secondPlace'),
      priority: searchParams.get('priority'),
    },
  ];

  // Article, tag, firstPlace, secondPlace, priority
  const { mutate } = useMutation({
    mutationFn: ({ isAlike, articleId }) =>
      !isAlike
        ? postAddArticleLike(jwt_token, articleId) // isAlike(boolean)에 따라서 좋아요 추가 또는 취소
        : deleteCanceArticlelLike(jwt_token, articleId),
    onSuccess: async ({ isAlike, articleId }) => {
      await queryClient.cancelQueries({ queryKey: [...key] });

      const prevArticleList = queryClient.getQueryData([...key]);

      queryClient.setQueryData([...key], old => {
        const newPages = old.pages.map(page =>
          page.data.data.viewArticleListDtoList.map(article => {
            if (article.articleId === articleId) {
              return !isAlike
                ? {
                    ...article,
                    articleLikeId: 1,
                    likeCnt: article.likeCnt + 1,
                  }
                : {
                    ...article,
                    articleLikeId: null,
                    likeCnt: article.likeCnt - 1,
                  };
            }
            return article;
          }),
        );
        return {
          ...old,
          pages: [...newPages],
        };
      });

      return { prevArticleList };
    },
    onError: (err, newArticleList, context) => {
      queryClient.setQueriesData([...key], context.prevArticleList);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [...key] });
    },
  });

  return { mutate };
}
