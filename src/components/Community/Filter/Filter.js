import './Filter.scss';

import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCommunityParams } from 'components/common/hooks/useCommunityParams';

import PrioritySelector from './Selector/PrioritySelector';
import LocationSelectors from './Selector/LocationSelectors';

function Filter() {
  const {
    searchParams,
    setSearchParams,
    firstPlace,
    setFirstPlace,
    secondPlace,
    setSecondPlace,
    setPriority,
  } = useCommunityParams();

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
