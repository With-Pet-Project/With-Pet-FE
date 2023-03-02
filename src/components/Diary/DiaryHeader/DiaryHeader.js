import './DiaryHeader.scss';
import Header from 'components/common/Header/Header';

import PetInfo from './PetInfo/PetInfo';
import AddPet from './AddPet/AddPet';

function DiaryHeader() {
  return (
    <Header>
      <div className="diary-header">
        <PetInfo />
        <AddPet />
      </div>
    </Header>
  );
}

export default DiaryHeader;
