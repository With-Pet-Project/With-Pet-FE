import './PetInfo.scss';

import { useState, useEffect, useContext } from 'react';
import dog from 'lib/assets/images/dog/md_icon.png';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import { usePet } from 'components/Diary/hooks/usePet';
import { petIdContext } from 'components/Diary/context/PetContext';
import Button from './Button/Button';
import PetList from './PetList/PetList';

function PetInfo() {
  const [petId, setPetId] = useContext(petIdContext);
  const [petIdx, setPetIdx] = useState(0);
  const petInfoList = usePet();
  const selectPet = idx => setPetIdx(idx);

  const { isOpen, open, targetRef } = useOutsideDetection();

  useEffect(() => {
    if (petInfoList?.length > 0) {
      setPetId(petInfoList[petIdx].id);
    } else {
      setPetId(false);
    }
  }, [petId, setPetId, petInfoList, petIdx]);
  return (
    <div className="pet-info">
      <div className="pet-profile-img">
        <img src={dog} alt="강아지이미지" />
      </div>
      <div className="pet-info-select">
        <Button
          ref={targetRef}
          isOpen={isOpen}
          petInfoList={petInfoList}
          petIdx={petIdx}
        />
        {open && (
          <PetList
            petInfoList={petInfoList}
            selectPet={selectPet}
            petIdx={petIdx}
          />
        )}
      </div>
    </div>
  );
}

export default PetInfo;
