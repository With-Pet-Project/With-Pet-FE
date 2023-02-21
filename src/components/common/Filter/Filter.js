import './Filter.scss';
import LocationSelectors from './Selector/LocationSelectors';
import { useLocationParam } from '../hooks/useLocationParam';

function Filter({ children }) {
  const { firstPlace, secondPlace, handleFirstPlace, handleSecondPlace } =
    useLocationParam();

  return (
    <div className="search-filter">
      <div className="button-filter">
        <LocationSelectors
          firstPlace={firstPlace}
          secondPlace={secondPlace}
          handleFirstPlace={handleFirstPlace}
          handleSecondPlace={handleSecondPlace}
        />
      </div>
      {children}
    </div>
  );
}

export default Filter;
