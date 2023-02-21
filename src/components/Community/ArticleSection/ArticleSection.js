import './ArticleSection.scss';
import Filter from 'components/common/Filter/Filter';
import PrioritySelector from 'components/common/Filter/Selector/PrioritySelector';
import ArticleList from './ArticleList/ArticleList';

function ArticleSection() {
  return (
    <div className="article-section">
      <Filter>
        <PrioritySelector />
      </Filter>
      <ArticleList />
    </div>
  );
}

export default ArticleSection;
