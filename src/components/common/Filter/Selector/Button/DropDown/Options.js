import './Options.scss';
import Option from './Option';

function Options({ handleParameter, list, close, parameterName }) {
  return (
    <div className="filter-options">
      <ul>
        {list?.map(elem => (
          <li key={elem}>
            <Option
              parameterName={parameterName}
              value={elem}
              handleParameter={handleParameter}
              close={close}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;
