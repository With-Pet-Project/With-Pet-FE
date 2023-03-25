import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { usePet } from 'components/Diary/hooks/usePet';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import './SelectPet.scss';

function SelectPet({ selectPet, setSelectPet }): ReactElement {
  const pets = usePet();
  const { open, isOpen, targetRef } = useOutsideDetection();

  const handleOnclick = (event: React.SyntheticEvent) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const { petId } = event.target.dataset;
    const petName = event.target.innerHTML;
    setSelectPet({ id: petId, name: petName });
  };

  const petListHTML = (
    <ul className="select-pet-list">
      <li key="all" data-pet-id="all" onClick={handleOnclick}>
        전체보기
      </li>
      {pets.map(pet => (
        <li
          key={pet.id}
          data-pet-id={pet.id}
          onClick={handleOnclick}
          data-cy="account-pet-item"
        >
          {pet.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="show-pet-account">
      <button
        type="button"
        className="select-pet"
        ref={targetRef}
        onClick={isOpen}
        data-cy="account-pet-select-btn"
      >
        <span className="chevron">
          <FontAwesomeIcon rotation={90} size="1x" icon={faChevronRight} />
        </span>
        <span className="pet-name">{selectPet.name}</span>
      </button>
      {open && petListHTML}
    </div>
  );
}
export default SelectPet;
