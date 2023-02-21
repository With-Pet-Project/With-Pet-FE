import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from './Button/Button';

function LocationSelectors({
  searchParams,
  firstPlace,
  setFirstPlace,
  secondPlace,
  setSecondPlace,
}) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [firstPlace, setFirstPlace] = useState(Object.keys(ADMIN_DISTRICT)[0]);
  // const [secondPlace, setSecondPlace] = useState(ADMIN_DISTRICT[firstPlace][0]);

  const handleFirstPlace = e => {
    setFirstPlace(e.target.value);
    searchParams.set('firstPlace', e.target.value);
  };

  const handleSecondPlace = e => {
    setSecondPlace(e.target.value);
    searchParams.set('secondPlace', e.target.value);
  };

  return (
    <div className="button-filter">
      <Button
        parameterName="firstPlace"
        handleParameter={handleFirstPlace}
        list={Object.keys(ADMIN_DISTRICT)}
      >
        {firstPlace}
      </Button>
      <Button
        parameterName="secondPlace"
        handleParameter={handleSecondPlace}
        list={ADMIN_DISTRICT[firstPlace]}
      >
        {secondPlace}
      </Button>
    </div>
  );
}

export default LocationSelectors;
