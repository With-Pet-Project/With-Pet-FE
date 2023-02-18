import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import FilterSwitch from './Switch/Switch';

function Selector({
  handleFirstPlace,
  handleSecondPlace,
  firstPlace,
  secondPlace,
}) {
  return (
    <div className="button-filter">
      <FilterSwitch
        handleParameter={handleFirstPlace}
        list={Object.keys(ADMIN_DISTRICT)}
      >
        {firstPlace}
      </FilterSwitch>
      <FilterSwitch
        handleParameter={handleSecondPlace}
        list={ADMIN_DISTRICT[firstPlace]}
      >
        {secondPlace}
      </FilterSwitch>
    </div>
  );
}

export default Selector;
