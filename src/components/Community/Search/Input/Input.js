/* eslint-disable no-unused-expressions */
// 검색어 입력창
import './Input.scss';
import styled from 'styled-components';

import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import HistoryList from '../History/HistoryList';

const SearchContainer = styled.div`
  flex-direction: ${({ focus }) => (focus ? 'column' : 'row')};
  flex-grow: ${({ focus }) => (focus ? '0' : '1')};

  & svg {
    align-self: ${({ focus }) => (focus ? 'flex-end' : 'center')};
    margin-top: ${({ focus }) => (focus ? '-30px' : '0')};
  }
`;

const SearchInput = styled.input`
  border: 1px solid ${({ focus }) => (focus ? '#62ccab' : '#dbdbdb')};
  background: ${({ focus }) => (focus ? '#fff' : '#eef0f3')};
`;

function Input({ isFocus, focus, inputRef, searchRef }) {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]); // 검색기록 관리 state

  const inputChange = e => {
    setValue(e.target.value);
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

  const isKeyDownEnter = () => {
    // Enter누르면 검색어 저장
    return window.event.keyCode === 13 && value && !history.includes(value)
      ? setHistory([...history, value])
      : 0;
  };

  useEffect(() => {
    // localStorage에서 검색기록 가져오기
    const searchHistory = localStorage.getItem('search');
    searchHistory && setHistory(JSON.parse(searchHistory));
  }, []);

  useEffect(() => {
    // localStorage에 검색기록 저장
    history.length
      ? localStorage.setItem('search', JSON.stringify(history))
      : localStorage.setItem('search', JSON.stringify([]));
  }, [history]);

  return (
    <SearchContainer
      className="search-input"
      focus={focus}
      onKeyUp={isKeyDownEnter}
      ref={searchRef}
    >
      {focus && (
        <label htmlFor="community-search">
          {value.length ? '' : '검색어를 입력해주세요.'}
        </label>
      )}
      <SearchInput
        ref={inputRef}
        id="community-search"
        type="text"
        autoComplete="off"
        focus={focus}
        onFocus={isFocus}
        onChange={inputChange}
        value={value}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      {focus && (
        <HistoryList
          history={history}
          clickHistory={clickHistory}
          removeHistory={removeHistory}
        />
      )}
    </SearchContainer>
  );
}

export default Input;
