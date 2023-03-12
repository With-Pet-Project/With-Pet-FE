import useConfirm from 'components/common/hooks/useConfirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Pet({ removePet, selectPet, pet, petIdx }) {
  const removeConfirm = useConfirm(
    () => removePet(pet.id),
    '정말로 삭제하시겠습니까?',
  );

  return (
    <>
      <button type="button" onClick={() => selectPet(petIdx)}>
        <span>{pet.name}</span>
      </button>
      <button type="button">
        <FontAwesomeIcon icon={faXmark} onClick={() => removeConfirm()} />
      </button>
    </>
  );
}

export default Pet;
