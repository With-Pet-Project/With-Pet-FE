import './PetList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRemovePet } from '../../hooks/useRemovePet';

function PetList({ petInfoList }) {
  const { mutate } = useRemovePet();

  const removePet = petId => mutate(petId);

  return (
    <ul className="diary-petList">
      {petInfoList?.length &&
        petInfoList?.map(pet => (
          <li className="diary-petList-item" key={pet.id}>
            <button type="button">
              <span>{pet.name}</span>
            </button>
            <button type="button">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => removePet(pet.id)}
              />
            </button>
          </li>
        ))}
    </ul>
  );
}

export default PetList;
