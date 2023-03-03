import Input from '../../../common/Input/Input';

function EditPet({ setIsEdit, pet }) {
  const handleDelete = () => {
    alert('삭제하시겠습니까?');
  };

  const handleEditPet = bool => {
    setIsEdit(bool);
  };

  return (
    <li className="pet-item">
      <Input type="text" placeholder={pet.name} className="pet-name" />
      <Input
        type="text"
        placeholder={`${pet.initWeight}kg`}
        className="pet-weight"
      />
      <Input type="text" placeholder={pet.birthday} className="pet-bday" />
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      <button type="button" onClick={() => handleEditPet(false)}>
        완료
      </button>
    </li>
  );
}

export default EditPet;
