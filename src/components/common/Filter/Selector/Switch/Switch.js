import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faV } from '@fortawesome/free-solid-svg-icons';

import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import Options from '../Option/Options';

const RotateArrow = styled.span`
  & svg {
    transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
    transition-duration: 0.2s;
  }
`;

function FilterSwitch({ handleParameter, list, children }) {
  const { open, isOpen, targetRef } = useOutsideDetection();

  return (
    <div className="filter-selector-button" ref={targetRef}>
      <button type="button" onClick={isOpen}>
        <RotateArrow rotate={open}>
          <FontAwesomeIcon icon={faV} />
        </RotateArrow>
        <span>{children}</span>
      </button>
      {open && (
        <Options handleParameter={handleParameter} list={list} close={isOpen} />
      )}
    </div>
  );
}

export default FilterSwitch;
