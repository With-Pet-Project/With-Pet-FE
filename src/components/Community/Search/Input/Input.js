import './Input.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Input({ isBlur, isFocus }) {
  return (
    <div className="search-input">
      <input type="text" onFocus={isFocus} onBlur={isBlur} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default Input;
