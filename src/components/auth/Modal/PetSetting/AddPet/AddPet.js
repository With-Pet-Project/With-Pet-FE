import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../common/Input/Input';
import './AddPet.scss';

function AddPet() {
  return (
    <form className="add-pet-form">
      <Input
        type="text"
        name="pet_name"
        className="pet-name"
        placeholder="펫 이름"
      />
      <Input
        type="number"
        name="pet_weight"
        className="pet-weight"
        placeholder="펫 무게"
      />
      <Input
        type="date"
        name="pet_bday"
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
