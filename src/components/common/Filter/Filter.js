import './Filter.scss';
import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FilterButton from './Button';

const PriorityButton = styled.button`
  color: ${({ selected }) => (selected ? '#252525' : '#878888')};
`;

function Filter() {
  const FISRT_DEPTH = Object.keys(ADMIN_DISTRICT);
  const [firstDepth, setFirstDepth] = useState(FISRT_DEPTH[0]);
  const [secondDepth, setSecondDepth] = useState(ADMIN_DISTRICT[firstDepth][0]);
  const [priority, setPriority] = useState('최신');
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriority = e => {
    setPriority(e.target.value);
  };

  useEffect(() => {
    searchParams.set('firstDepth', firstDepth);
    searchParams.set('secondDepth', secondDepth);
    searchParams.set('priority', priority);
    setSearchParams(searchParams);
  }, [firstDepth, priority, secondDepth]);

  return (
    <div className="search-filter">
      <div className="button-filter">
        <FilterButton>{firstDepth}</FilterButton>
        <FilterButton>{secondDepth}</FilterButton>
      </div>
      <div className="button-filter">
        <PriorityButton
          type="button"
          value="인기"
          selected={searchParams.get('priority') === '인기'}
          onClick={handlePriority}
        >
          인기순
        </PriorityButton>
        <div className="button-border" />
        <PriorityButton
          type="button"
          value="최신"
          onClick={handlePriority}
          selected={searchParams.get('priority') === '최신'}
        >
          최신순
        </PriorityButton>
      </div>
      <div className="priority-filter" />
    </div>
  );
}

export default Filter;
