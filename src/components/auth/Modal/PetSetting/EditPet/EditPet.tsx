// @ts-nocheck

import { ReactElement } from 'react';
import { useRemovePet } from 'components/Diary/hooks/useRemovePet';
import { useUpdatePet } from 'components/auth/hooks/useUpdatePet';
import useConfirm from 'components/common/hooks/useConfirm';
import Input from '../../../common/Input/Input';
import { Pet } from 'lib/types/types';

function EditPet({ setIsEdit, pet }): ReactElement {
  const { mutate: removeMutate } = useRemovePet();
  const { mutate: updateMutate }: Pet = useUpdatePet();

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
          cy="mypost-edit-pet-item"
        />
        <Input
          type="text"
          placeholder={`${pet.initWeight}kg`}
          className="pet-weight"
          name="petWeight"
          cy="mypost-edit-pet-item"
        />
        <Input
          type="text"
          placeholder={pet.birthday}
          className="pet-bday"
          name="petBday"
          cy="mypost-edit-pet-item"
        />
        <button
          type="button"
          onClick={handleDelete}
          data-cy="mypost-delete-pet-submit"
        >
          삭제
        </button>
        <button type="submit" data-cy="mypost-edit-pet-submit">
          완료
        </button>
      </form>
    </li>
  );
}

export default EditPet;
