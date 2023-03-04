import './Filter.scss';

import { useState } from 'react';
import { useCommunityParams } from '../hooks/useCommunityParams';

import PrioritySelector from './Selector/PrioritySelector';
import LocationSelectors from './Selector/LocationSelectors';

function Filter() {
  const [priority, setPriority] = useState('최신');
  const {
    searchParams,
    setSearchParams,
    firstPlace,
    setFirstPlace,
    secondPlace,
    setSecondPlace,
  } = useCommunityParams(priority, setPriority);

  return (
    <div className="search-filter">
      <LocationSelectors
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        firstPlace={firstPlace}
        setFirstPlace={setFirstPlace}
        secondPlace={secondPlace}
        setSecondPlace={setSecondPlace}
      />
      <PrioritySelector
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setPriority={setPriority}
      />
    </div>
  );
}

export default Filter;
