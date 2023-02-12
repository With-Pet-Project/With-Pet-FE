import './Search.scss';
import styled from 'styled-components';

import { useState } from 'react';
import TagList from './Tags/TagList';
import Input from './Input/Input';

const SearchForm = styled.form`
  border-bottom: 1px solid ${({ focus }) => (focus ? '#fff' : '#dbdbdb')};
`;

function Search() {
  const [inputFocus, setInputFocus] = useState(false);

  const isFocus = () => setInputFocus(true);
  const isBlur = () => setInputFocus(false);

  return (
    <SearchForm className="community-search-container" focus={inputFocus}>
      {!inputFocus && <TagList />}
      <Input isFocus={isFocus} isBlur={isBlur} />
      {inputFocus && (
        <div className="community-result-container">
          <div className="community-search-result" />
          <div className="community-result-background" />
        </div>
      )}
    </SearchForm>
  );
}

export default Search;
