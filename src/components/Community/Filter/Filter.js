import './Filter.scss';

import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import PrioritySelector from './Selector/PrioritySelector';
import LocationSelectors from './Selector/LocationSelectors';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstPlace, setFirstPlace] = useState(Object.keys(ADMIN_DISTRICT)[0]);
  const [secondPlace, setSecondPlace] = useState(ADMIN_DISTRICT[firstPlace][0]);
  const [priority, setPriority] = useState('최신');

  useEffect(() => {
    const tag = searchParams.get('tag');

    if (tag) {
      searchParams.set('tag', tag);
      searchParams.set('firstPlace', firstPlace);
      searchParams.set('secondPlace', secondPlace);
      searchParams.set('priority', priority);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, firstPlace, secondPlace, priority]);

  useEffect(() => {
    setSecondPlace(ADMIN_DISTRICT[firstPlace][0]);
  }, [firstPlace]);

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
