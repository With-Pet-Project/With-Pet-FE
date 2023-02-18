import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faV } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useEffect } from 'react';

import Options from '../Option/Options';

const RotateArrow = styled.span`
  & svg {
    transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
    transition-duration: 0.2s;
  }
`;

function FilterSwitch({ handleParameter, list, children }) {
  const [rotate, setRotate] = useState(false);
  const optionRef = useRef();

  const isRotate = () => {
    setRotate(!rotate);
  };

  useEffect(() => {
    const handleRotate = e => {
      if (
        rotate &&
        optionRef.current &&
        !optionRef.current.contains(e.target)
      ) {
        setRotate(false);
      }
    };

    window.addEventListener('click', handleRotate);

    return () => {
      window.removeEventListener('click', handleRotate);
    };
  });

  return (
    <div className="filter-selector-button" ref={optionRef}>
      <button type="button" onClick={isRotate}>
        <RotateArrow rotate={rotate}>
          <FontAwesomeIcon icon={faV} />
        </RotateArrow>
        <span>{children}</span>
      </button>
      {rotate && (
        <Options
          handleParameter={handleParameter}
          list={list}
          close={isRotate}
        />
      )}
    </div>
  );
}

export default FilterSwitch;
