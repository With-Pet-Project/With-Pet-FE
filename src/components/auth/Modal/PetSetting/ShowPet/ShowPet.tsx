import { useState, ReactElement } from 'react';
import EditPet from '../EditPet/EditPet';

function ShowPet({ pet }): ReactElement {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditPet = (isEditClick: boolean): void => {
    setIsEdit(isEditClick);
  };

  const HTML = isEdit ? (
    <EditPet setIsEdit={setIsEdit} pet={pet} />
  ) : (
    <li className="pet-item" data-cy="mypost-pet-item">
      <span className="pet-name">{pet.name}</span>
      <span className="pet-weight">{pet.initWeight}kg</span>
      <span className="pet-bday">{pet.birthday}</span>
      <button
        type="button"
        data-cy="mypost-edit-btn"
        onClick={() => handleEditPet(true)}
      >
        편집
      </button>
    </li>
  );

  return HTML;
}

export default ShowPet;
