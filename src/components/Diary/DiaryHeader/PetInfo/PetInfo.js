import './PetInfo.scss';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import dog from 'lib/assets/images/dog/md_icon.png';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import { usePet } from '../hooks/usePet';
import Button from './Button/Button';
import PetList from './PetList/PetList';

function PetInfo() {
  const [petIdParams, setPetIdParams] = useSearchParams();
  const [petIdx, setPetIdx] = useState(0);
  const petInfoList = usePet();
  const selectPet = idx => setPetIdx(idx);

  const { isOpen, open, targetRef } = useOutsideDetection();

  useEffect(() => {
    if (petInfoList.length) {
      petIdParams.set('petId', petInfoList[petIdx].id);
    } else {
      petIdParams.set('petId', false);
    }
    setPetIdParams(petIdParams);
  }, [petIdx, petInfoList]);
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
