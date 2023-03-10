import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAddPet } from 'components/Diary/hooks/useAddPet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../common/Input/Input';
import './AddPet.scss';

function AddPet() {
  const addPet = useAddPet();

  const handleSubmit = event => {
    event.preventDefault();
    const { value: petName } = event.target.elements.petName;
    const { value: petWeight } = event.target.elements.petWeight;
    const { value: petBday } = event.target.elements.petBday;
    addPet({ name: petName, initWeight: Number(petWeight), birthday: petBday });
  };

  return (
    <form className="add-pet-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="petName"
        className="pet-name"
        placeholder="펫 이름"
      />
      <Input
        type="number"
        name="petWeight"
        step="any"
        className="pet-weight"
        placeholder="펫 무게"
        min="0.1"
      />
      <Input
        type="date"
        name="petBday"
        className="pet-bday"
        placeholder="펫 생일"
      />
      <button type="submit" className="add-pet-submit">
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
    </form>
  );
}

export default AddPet;
