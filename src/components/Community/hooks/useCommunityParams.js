import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useCommunityParams(priority = null, setPriority = null) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstPlace, setFirstPlace] = useState(Object.keys(ADMIN_DISTRICT)[0]);
  const [secondPlace, setSecondPlace] = useState(ADMIN_DISTRICT[firstPlace][0]);

  useEffect(() => {
    const tag = searchParams.get('tag');

    if (tag) {
      searchParams.set('tag', tag);
      if (tag !== 'LOST' && tag !== 'WALK' && tag !== 'HOSPITAL') {
        searchParams.set('firstPlace', '지역 선택');
        searchParams.set('secondPlace', secondPlace);
      } else {
        searchParams.set('firstPlace', firstPlace);
        searchParams.set('secondPlace', secondPlace);
      }

      if (priority) {
        searchParams.set('priority', priority);
      }
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, firstPlace, secondPlace, priority]);

  useEffect(() => {
    setSecondPlace(ADMIN_DISTRICT[firstPlace][0]);
  }, [firstPlace]);

  return {
    searchParams,
    setSearchParams,
    firstPlace,
    setFirstPlace,
    secondPlace,
    setSecondPlace,
  };
}
