import './CommunityMain.scss';

import Search from './Search/Search';
import ArticleSection from './ArticleSection/ArticleSection';

function CommunityMain() {
  return (
    <div className="community-main">
      <Search />
      <ArticleSection />
    </div>
  );
}

export default CommunityMain;
