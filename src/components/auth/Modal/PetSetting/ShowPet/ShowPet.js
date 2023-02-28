function ShowPet({ setIsEdit }) {
  const handleEditPet = bool => {
    setIsEdit(bool);
  };

  return (
    <li className="pet-item">
      <span className="pet-name">댕댕이</span>
      <span className="pet-weight">1.4kg</span>
      <span className="pet-bday">2022-01-02</span>
      <button type="button" onClick={() => handleEditPet(true)}>
        편집
      </button>
    </li>
  );
}

export default ShowPet;
