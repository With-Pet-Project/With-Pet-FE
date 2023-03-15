import './PetList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRemovePet } from 'components/Diary/hooks/useRemovePet';
import Pet from './Pet';

function PetList({ petInfoList, selectPet, petIdx }) {
  const { mutate: removePetMutate } = useRemovePet(selectPet, petIdx);
  const removePet = petId => removePetMutate(petId);

  return (
    <ul className="diary-petList">
      {petInfoList?.length &&
        petInfoList?.map((pet, index) => (
          <li className="diary-petList-item" key={pet.id}>
            <Pet
              removePet={removePet}
              selectPet={selectPet}
              pet={pet}
              petIdx={index}
            />
          </li>
        ))}
    </ul>
  );
}

export default PetList;
