import MainWrapper from 'components/common/Wrapper/MainWrapper';
import ArticleMain from 'components/Article/ArticleMain/ArticleMain';
import ArticleComments from 'components/Article/ArticleComments/ArticleComments';
import { Suspense } from 'react';

function ArticlePage() {
  return (
    <MainWrapper>
      <Suspense>
        <ArticleMain />
        <ArticleComments />
      </Suspense>
    </MainWrapper>
  );
}

export default ArticlePage;
