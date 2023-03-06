/* eslint-disable camelcase */
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddArticleLike, deleteCanceArticlelLike } from 'lib/APIs/article';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_OPTION } from 'components/common/Toast/toast';

export function useArticleLike(whetherLike, likeCnt) {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAlike, setIsAlike] = useState(whetherLike);
  const [likeCount, setLikeCount] = useState(likeCnt);

  const jwt_token = localStorage.getItem('jwt_token') || null;

  /**  const key = [
    QUERY_KEY.Article,
    {
      tag: searchParams.get('tag'),
      firstPlace: searchParams.get('firstPlace'),
      secondPlace: searchParams.get('secondPlace'),
      priority: searchParams.get('priority'),
    },
  ]; */

  // Article, tag, firstPlace, secondPlace, priority
  const { mutate } = useMutation({
    mutationFn: articleId =>
      !isAlike
        ? postAddArticleLike(jwt_token, articleId) // isAlike(boolean)에 따라서 좋아요 추가 또는 취소
        : deleteCanceArticlelLike(jwt_token, articleId),
    onMutate: async articleId => {
      // eslint-disable-next-line no-unused-expressions
      !isAlike ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
      setIsAlike(!isAlike);
      /**
       * 무한스크롤에 optimistic update를 사용하면
       * 성공시, invalidateQuery로 인해 전체 리렌더링.
       * 편법 사용
       * 1. isAlike 초기값 => article.articleLikeId : number | null
       * 2. 좋아요 버튼 누른다.
       *  - true => false, false => true
       * 3. 요청 성공시 isAlike state유지
       * 4. 실패 시 다시 원래대로 돌림.
       */
      /** await queryClient.cancelQueries({ queryKey: [...key] });

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

      return { prevArticleList }; */
    },
    onError: (err, newArticleList, context) => {
      toast.warning('로그인이 필요합니다.', TOAST_OPTION);
      // queryClient.setQueriesData([...key], context.prevArticleList);
      setIsAlike(whetherLike);
      setLikeCount(likeCnt);
    },
    onSettled: () => {
      // queryClient.invalidateQueries({ queryKey: [...key] });
    },
  });

  return { mutate, isAlike, setIsAlike, likeCount };
}
