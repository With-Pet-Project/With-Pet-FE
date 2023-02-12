import './Search.scss';

import { useState } from 'react';
import Input from './Input';

function Search() {
  const [focus, setFocus] = useState(false);

  return (
    <form className="community-search">
      <Input />
    </form>
  );
}

export default Search;
