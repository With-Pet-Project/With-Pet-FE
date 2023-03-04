function ShowPet({ setIsEdit, pet }) {
  const handleEditPet = bool => {
    setIsEdit(bool);
  };

  return (
    <li className="pet-item">
      <span className="pet-name">{pet.name}</span>
      <span className="pet-weight">{pet.initWeight}kg</span>
      <span className="pet-bday">{pet.birthday}</span>
      <button type="button" onClick={() => handleEditPet(true)}>
        편집
      </button>
    </li>
  );
}

export default ShowPet;
