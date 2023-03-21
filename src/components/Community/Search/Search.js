/* eslint-disable no-unused-expressions */
import './Search.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import { useState, useRef, useEffect } from 'react';
import { useInput } from 'components/common/hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import HistoryList from './History/HistoryList';
import TagList from './Tags/TagList';

const SearchForm = styled.form`
  border-bottom: 1px solid ${({ focus }) => (focus ? '#fff' : '#dbdbdb')};
  flex-direction: ${({ focus }) => (focus ? 'column' : 'row')};
`;

const SearchContainer = styled.div`
  flex-direction: ${({ focus }) => (focus ? 'column' : 'row')};
  flex-grow: ${({ focus }) => (focus ? '0' : '1')};

  & svg {
    align-self: ${({ focus }) => (focus ? 'flex-end' : 'center')};
    margin-top: ${({ focus }) => (focus ? '-30px' : '0')};
  }
`;

const SearchInput = styled.input`
  border: 1px solid
    ${({ focus }) => (focus ? `${vars.backgroundYellow}` : '#dbdbdb')};
  background: ${({ focus }) => (focus ? '#fff' : '#eef0f3')};
  padding-left: ${({ focus }) => (focus ? '43px' : '20px')};
`;

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { value, setValue, handleChange } = useInput();
  const [inputFocus, setInputFocus] = useState(false);
  const [history, setHistory] = useState([]); // 검색기록 관리 state
  const inputRef = useRef(); // search Input의 value를 가져와서 submit하기 위해서.
  const searchRef = useRef(); // 검색창 바깥 클릭시, input focus 해제

  const isFocus = () => setInputFocus(true);
  const isBlur = e => {
    if (!searchRef.current.contains(e.target)) {
      setInputFocus(false);
    }
  };

  const clickHistory = h => {
    // 검색 기록 클릭
    setValue(h);
    inputRef.current.focus();
  };

  const removeHistory = h => {
    // 검색기록 삭제
    const removedHistory = history.filter(elem => elem !== h);
    setHistory(removedHistory);
    inputRef.current.focus();
  };

  const onSubmit = e => {
    e.preventDefault();
    value && !history.includes(value) ? setHistory([...history, value]) : 0;
    searchParams.set('search', value);
    setSearchParams(searchParams);
    setInputFocus(false);
    inputRef.current.blur();
    // inputRef.current.value를  submit
  };

  useEffect(() => {
    // localStorage에서 검색기록 가져오기
    searchParams.set('search', '');
    setSearchParams(searchParams);

    const searchHistory = localStorage.getItem('search');
    searchHistory && setHistory(JSON.parse(searchHistory));
  }, []);

  useEffect(() => {
    // localStorage에 검색기록 저장
    history.length && localStorage.setItem('search', JSON.stringify(history));
  }, [history]);

  return (
    <SearchForm
      className="community-search-container"
      focus={inputFocus}
      onSubmit={onSubmit}
      onClick={isBlur}
    >
      {!inputFocus && <TagList />}
      <SearchContainer
        className="search-input"
        focus={inputFocus}
        ref={searchRef}
      >
        {inputFocus && (
          <div className="community-submit-button">
            <button className="community-search-button" type="submit">
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                />
              </span>
            </button>
          </div>
        )}
        <SearchInput
          ref={inputRef}
          id="community-search"
          type="text"
          autoComplete="off"
          spellCheck={false}
          focus={inputFocus}
          placeholder="검색어를 입력해주세요."
          onFocus={isFocus}
          value={value}
          onChange={handleChange}
          aria-label="검색어 입력창"
        />
        {!inputFocus && (
          <FontAwesomeIcon icon={faMagnifyingGlass} id="outfocus-search-icon" />
        )}
        {inputFocus && (
          <HistoryList
            history={history}
            clickHistory={clickHistory}
            removeHistory={removeHistory}
          />
        )}
      </SearchContainer>
      {inputFocus && (
        <div className="community-result-container">
          <div className="community-result-background" />
        </div>
      )}
    </SearchForm>
  );
}

export default Search;
