import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PriorityButton = styled.button`
  color: ${({ selected }) => (selected ? '#252525' : '#878888')};
  font-weight: ${({ selected }) => (selected ? '800' : '400')};
`;

function PrioritySelector({ searchParams, setSearchParams, setPriority }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const handlePriority = e => setPriority(e.target.value);

  return (
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
  );
}

export default PrioritySelector;
