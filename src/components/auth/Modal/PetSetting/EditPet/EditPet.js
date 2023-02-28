import Input from '../../../common/Input/Input';

function EditPet({ setIsEdit }) {
  const handleDelete = () => {
    alert('삭제하시겠습니까?');
  };

  const handleEditPet = bool => {
    setIsEdit(bool);
  };

  return (
    <li className="pet-item">
      <Input type="text" placeholder="댕댕이" className="pet-name" />
      <Input type="text" placeholder="1.4kg" className="pet-weight" />
      <Input type="text" placeholder="2022-01-02" className="pet-bday" />
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
