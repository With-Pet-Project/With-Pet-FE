/* eslint-disable no-unused-expressions */
import DownArrow from 'components/common/SelectArrow/DownArrow';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import DropDown from './DropDown';

function Location() {
  const { open, isOpen, targetRef } = useOutsideDetection();
  const [params, setParams] = useSearchParams();
  const [buttonEnabled, setButtonEnabled] = useState(true);

  useEffect(() => {
    const p = params.get('tag');
    p !== 'LOST' && p !== 'WALK' && p !== 'HOSPITAL'
      ? setButtonEnabled(false)
      : setButtonEnabled(true);
  }, [params]);

  return (
    <div className="Location-selector-button" ref={targetRef}>
      <button type="button" onClick={isOpen} disabled={!buttonEnabled}>
        <span>{buttonEnabled ? params.get('firstPlace') : '선택 불가'}</span>
      </button>
      <DownArrow />
      <DropDown open={open} />
    </div>
  );
}

export default Location;
