import { ARTICLE_LIST_PAGE_ONE } from 'lib/mocks/article/articleGet';
import './ArticleList.scss';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useArticles } from 'components/Community/hooks/useArticles';
import ArticleItem from './ArticleItem';

function ArticleList() {
  const { data, fetchNextPage, hasNextPage } = useArticles('ALL', '서울');
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(data);
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="Article-list">
      <ul>
        {data?.pages?.map(elem =>
          elem.data?.data?.articlesList?.map(article => (
            <li key={article.articleId}>
              <ArticleItem article={article} />
            </li>
          )),
        )}
      </ul>
      <div ref={ref}>{inView}</div>
    </div>
  );
}

export default ArticleList;
