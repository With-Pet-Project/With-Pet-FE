import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import Button from './Button/Button';

function LocationSelectors({
  handleFirstPlace,
  handleSecondPlace,
  firstPlace,
  secondPlace,
}) {
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
