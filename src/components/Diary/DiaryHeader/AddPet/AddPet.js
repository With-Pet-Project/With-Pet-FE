import './AddPet.scss';

import { useModal } from 'components/common/Modal/context/useModal';
import PetModal from '../../Modal/AddPet/AddPet';

function AddPet() {
  const { openModal } = useModal();

  return (
    <div className="add-pet-button">
      <button type="button" onClick={() => openModal(PetModal)}>
        <span>반려동물 추가하기</span>
      </button>
    </div>
  );
}

export default AddPet;
