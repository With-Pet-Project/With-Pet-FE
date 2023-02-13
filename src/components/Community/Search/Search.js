import './Search.scss';
import styled from 'styled-components';

import { useState, useRef } from 'react';
import TagList from './Tags/TagList';
import Input from './Input/Input';

const SearchForm = styled.form`
  border-bottom: 1px solid ${({ focus }) => (focus ? '#fff' : '#dbdbdb')};
  flex-direction: ${({ focus }) => (focus ? 'column' : 'row')};
`;

function Search() {
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = useRef(); // search Input의 value를 가져와서 submit하기 위해서.
  const searchRef = useRef(); // 검색창 바깥 클릭시, input focus 해제

  const isFocus = () => setInputFocus(true);
  const isBlur = e => {
    if (!searchRef.current.contains(e.target)) {
      setInputFocus(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    // inputRef.current.value를  submit
    console.log(inputRef.current.value);
  };

  return (
    <SearchForm
      className="community-search-container"
      focus={inputFocus}
      onSubmit={onSubmit}
      onClick={isBlur}
    >
      {!inputFocus && <TagList />}
      <Input
        isFocus={isFocus}
        isBlur={isBlur}
        focus={inputFocus}
        inputRef={inputRef}
        searchRef={searchRef}
      />
      {inputFocus && (
        <div className="community-result-container">
          <div className="community-result-background" />
        </div>
      )}
    </SearchForm>
  );
}

export default Search;
