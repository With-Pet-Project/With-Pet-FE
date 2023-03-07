import styled from 'styled-components';

const PriorityButton = styled.button`
  color: ${({ selected }) => (selected ? '#252525' : '#878888')};
  font-weight: ${({ selected }) => (selected ? '800' : '400')};
`;

function PrioritySelector({ searchParams, setPriority }) {
  const handlePriority = e => setPriority(e.target.value);

  return (
    <div className="button-filter">
      <PriorityButton
        type="button"
        value="POPULAR"
        selected={searchParams.get('priority') === 'POPULAR'}
        onClick={handlePriority}
      >
        인기순
      </PriorityButton>
      <div className="button-border" />
      <PriorityButton
        type="button"
        value="RECENT"
        onClick={handlePriority}
        selected={searchParams.get('priority') === 'RECENT'}
      >
        최신순
      </PriorityButton>
    </div>
  );
}

export default PrioritySelector;
