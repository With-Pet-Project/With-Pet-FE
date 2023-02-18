import './Options.scss';
import Option from './Option';

function Options({ handleParameter, list, close }) {
  return (
    <div className="filter-options">
      <ul>
        {list?.map(elem => (
          <li key={elem}>
            <Option
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
