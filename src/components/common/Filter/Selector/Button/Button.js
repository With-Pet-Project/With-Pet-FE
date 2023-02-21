/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import Options from './DropDown/Options';

const RotateArrow = styled.span`
  & svg {
    transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
    transition-duration: 0.2s;
  }
`;

function Button({ handleParameter, list, children, parameterName }) {
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
    <div className="filter-selector-button" ref={targetRef}>
      <button type="button" onClick={isOpen} disabled={!buttonEnabled}>
        <RotateArrow rotate={open}>
          <FontAwesomeIcon icon={faAngleDown} />
        </RotateArrow>
        <span>{buttonEnabled ? children : '해당없음'}</span>
      </button>
      {open && (
        <Options
          handleParameter={handleParameter}
          list={list}
          close={isOpen}
          parameterName={parameterName}
        />
      )}
    </div>
  );
}

export default Button;
