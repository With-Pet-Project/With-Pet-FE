import './Filter.scss';
import styled from 'styled-components';
import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Selector from './Selector/Selector';

const PriorityButton = styled.button`
  color: ${({ selected }) => (selected ? '#252525' : '#878888')};
  font-weight: ${({ selected }) => (selected ? '800' : '400')};
`;

function Filter() {
  const [priority, setPriority] = useState('최신');
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstPlace, setFirstPlace] = useState(Object.keys(ADMIN_DISTRICT)[0]);
  const [secondPlace, setSecondPlace] = useState(ADMIN_DISTRICT[firstPlace][0]);

  const handlePriority = e => {
    setPriority(e.target.value);
  };

  const handleFirstPlace = e => setFirstPlace(e.target.value);
  const handleSecondPlace = e => setSecondPlace(e.target.value);

  useEffect(() => {
    // const param = new URLSearchParams(location.search);
    // const tag = param.get('tag');
    const tag = searchParams.get('tag');
    if (tag) {
      searchParams.set('tag', tag);
      searchParams.set('priority', priority);
      searchParams.set('firstPlace', firstPlace);
      searchParams.set('secondPlace', secondPlace);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, priority, firstPlace, secondPlace]);

  useEffect(() => {
    setSecondPlace(ADMIN_DISTRICT[firstPlace][0]);
  }, [firstPlace]);

  return (
    <div className="search-filter">
      <div className="button-filter">
        <Selector
          firstPlace={firstPlace}
          secondPlace={secondPlace}
          handleFirstPlace={handleFirstPlace}
          handleSecondPlace={handleSecondPlace}
        />
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
