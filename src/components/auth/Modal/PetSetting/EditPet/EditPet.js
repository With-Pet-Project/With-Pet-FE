import { useRemovePet } from 'components/Diary/hooks/useRemovePet';
import { useUpdatePet } from 'components/auth/hooks/useUpdatePet';
import useConfirm from 'components/common/hooks/useConfirm';
import Input from '../../../common/Input/Input';

function EditPet({ setIsEdit, pet }) {
  const { mutate: removeMutate } = useRemovePet();
  const { mutate: updateMutate } = useUpdatePet();

  const onConfirm = () => {
    removeMutate(pet.id);
  };

  const confirmDelete = useConfirm(onConfirm, '삭제하시겠습니까?');

  const handleDelete = () => {
    confirmDelete();
  };

  const handleEditPet = event => {
    event.preventDefault();
    const { value: petName } = event.target.elements.petName;
    const { value: petWeight } = event.target.elements.petWeight;
    const { value: petBday } = event.target.elements.petBday;

    updateMutate({
      id: pet.id,
      name: petName || pet.name,
      initWeight: Number(petWeight) || pet.initWeight,
      birthday: petBday || pet.birthday,
    });
    setIsEdit(false);
  };

  return (
    <li className="pet-item">
      <form className="pet-edit-form" onSubmit={handleEditPet}>
        <Input
          type="text"
          placeholder={pet.name}
          className="pet-name"
          name="petName"
        />
        <Input
          type="text"
          placeholder={`${pet.initWeight}kg`}
          className="pet-weight"
          name="petWeight"
        />
        <Input
          type="text"
          placeholder={pet.birthday}
          className="pet-bday"
          name="petBday"
        />
        <button type="button" onClick={handleDelete}>
          삭제
        </button>
        <button type="submit">완료</button>
      </form>
    </li>
  );
}

export default EditPet;
