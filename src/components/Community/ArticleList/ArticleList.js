// import { ARTICLE_LIST_PAGE_ONE } from 'lib/mocks/article/articleGet';
import './ArticleList.scss';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useArticles } from 'components/Community/hooks/useArticles';
import ArticleItem from './ArticleItem';

function ArticleList() {
  const { ref, inView } = useInView();
  const { pages, fetchNextPage, hasNextPage } = useArticles();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <div className="article-section">
      <div className="Article-list">
        <ul>
          {pages?.map(page => {
            return page.data?.data?.viewArticleListDto?.length ? (
              page.data?.data?.viewArticleListDto?.map(article => (
                <li key={article.articleId}>
                  <ArticleItem article={article} />
                </li>
              ))
            ) : (
              <li>
                <span>검색 결과가 없습니다.</span>
              </li>
            );
          })}
        </ul>
        <div
          data-testid="inView"
          ref={ref}
          aria-label={`${inView}`}
          role="log"
        />
      </div>
    </div>
  );
}

export default ArticleList;
