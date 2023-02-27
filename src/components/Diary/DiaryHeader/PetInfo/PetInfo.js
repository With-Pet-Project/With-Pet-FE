import './PetInfo.scss';

import { useState } from 'react';
import dog from 'lib/assets/images/dog/md_icon.png';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import { usePet } from '../hooks/usePet';
import Button from './Button/Button';
import PetList from './PetList/PetList';

function PetInfo() {
  const [petId, setPetId] = useState(null);
  const petInfoList = usePet();

  const { isOpen, open, targetRef } = useOutsideDetection();
  return (
    <div className="pet-info">
      <div className="pet-profile-img">
        <img src={dog} alt="강아지이미지" />
      </div>
      <Button ref={targetRef} isOpen={isOpen} petInfoList={petInfoList}>
        {open && <PetList petInfoList={petInfoList} />}
      </Button>
    </div>
  );
}

export default PetInfo;
