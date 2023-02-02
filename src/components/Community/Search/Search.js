import './Search.scss';
import styled from 'styled-components';

const SearchInput = styled.input`
  height: 100%;
  width: ${({ focus }) => (focus ? '100%' : '20%')};
  min-width: 260px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-left: auto;
  border: 1px solid #9ea3bc;
  font-size: 20px;
  padding: 10px 20px;

  &:focus {
    outline: none;
  }
`;

function Search({ isFocus, focus }) {
  return (
    <div className="search-input-container">
      <SearchInput
        onFocus={isFocus}
        onBlur={isFocus}
        focus={focus}
        placeholder={focus ? '검색어를 입력하세요' : '검색'}
      />
      {/** label tag will be added */}
    </div>
  );
}

export default Search;
// 검색창
