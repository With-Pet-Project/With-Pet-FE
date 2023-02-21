import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useLocationParam() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstPlace, setFirstPlace] = useState(Object.keys(ADMIN_DISTRICT)[0]);
  const [secondPlace, setSecondPlace] = useState(ADMIN_DISTRICT[firstPlace][0]);

  const handleFirstPlace = e => setFirstPlace(e.target.value);
  const handleSecondPlace = e => setSecondPlace(e.target.value);

  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag) {
      searchParams.set('tag', tag);
      searchParams.set('firstPlace', firstPlace);
      searchParams.set('secondPlace', secondPlace);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, firstPlace, secondPlace]);

  useEffect(() => {
    setSecondPlace(ADMIN_DISTRICT[firstPlace][0]);
  }, [firstPlace]);

  return {
    firstPlace,
    secondPlace,
    handleFirstPlace,
    handleSecondPlace,
  };
}
