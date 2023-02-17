import './ArticleSection.scss';

import Filter from 'components/common/Filter/Filter';
import ArticleList from './ArticleList/ArticleList';

function ArticleSection() {
  return (
    <div className="article-section">
      <Filter />
      <ArticleList />
    </div>
  );
}

export default ArticleSection;
