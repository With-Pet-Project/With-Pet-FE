import { useModal } from 'components/common/Modal/context/useModal';
import { usePet } from 'components/Diary/hooks/usePet';
import './PetSetting.scss';
import AddPet from './AddPet/AddPet';
import ShowPet from './ShowPet/ShowPet';

function PetSetting() {
  const { closeModal } = useModal();
  const pets = usePet();
  console.log(pets);

  const handleCloseModal = () => {
    closeModal(PetSetting);
  };

  return (
    <div className="pet-setting-wrapper">
      <h3 className="title">펫 수정</h3>
      <AddPet />
      <ul className="pet-list">
        {pets.map(pet => (
          <ShowPet pet={pet} key={pet.id} />
        ))}
      </ul>
      <div className="btn-wrapper">
        <button type="button" className="submit-btn" onClick={handleCloseModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default PetSetting;
