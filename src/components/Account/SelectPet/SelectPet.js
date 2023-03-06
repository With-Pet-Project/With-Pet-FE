import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SelectPet.scss';

function SelectPet() {
  return (
    <ul className="pet-account-list">
      <li>
        <span className="chevron">
          <FontAwesomeIcon rotation={90} icon={faChevronRight} />
        </span>
        <span className="pet-name">전체보기</span>
      </li>
    </ul>
  );
}
export default SelectPet;
