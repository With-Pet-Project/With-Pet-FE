import './PetList.scss';

function PetList({ petInfoList }) {
  return (
    <ul className="diary-petList">
      {petInfoList?.length &&
        petInfoList?.map(pet => (
          <li className="diary-petList-item" key={pet.id}>
            <span>{pet.name}</span>
          </li>
        ))}
    </ul>
  );
}

export default PetList;
