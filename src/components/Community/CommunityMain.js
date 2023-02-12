import './CommunityMain.scss';

import { useState } from 'react';
import Search from './Search/Search';

function CommunityMain() {
  return (
    <div className="community-main">
      <Search />
    </div>
  );
}

export default CommunityMain;
