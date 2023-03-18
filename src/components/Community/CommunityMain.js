import { Suspense } from 'react';
import Loading from 'components/common/Loading/Loading';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import ArticleList from './ArticleList/ArticleList';

function CommunityMain() {
  return (
    <Suspense fallback={<Loading />}>
      <Search />
      <Filter />
      <ArticleList />
    </Suspense>
  );
}

export default CommunityMain;
