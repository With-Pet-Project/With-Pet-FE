import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faV } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const RotateArrow = styled.span`
  & svg {
    transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
    transition-duration: 0.2s;
  }
`;

function FilterButton({ children }) {
  const [rotate, setRotate] = useState(false);

  const isRotate = () => {
    console.log(rotate);
    setRotate(!rotate);
  };

  return (
    <button type="button" onClick={isRotate}>
      <RotateArrow rotate={rotate}>
        <FontAwesomeIcon icon={faV} />
      </RotateArrow>
      <span>{children}</span>
    </button>
  );
}

export default FilterButton;
