import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import Button from './DropDown/Button';

function LocationSelectors({
  searchParams,
  firstPlace,
  setFirstPlace,
  secondPlace,
  setSecondPlace,
}) {
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
