import styled from 'styled-components';

import { useRef } from 'react';
import { useModalController } from '../ChallengeSection/Challenge/context/modalController';

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1em;
  border-radius: 0.5em;
  margin: auto;
  box-shadow: 0px 4px 18px rgba(137, 137, 137, 0.25);
`;

function ModalWrapper({ children }) {
  const modalRef = useRef();

  const {
    openAddChallenge,
    openChallengeList,
    isOpenAddChallenge,
    isOpenChallengeList,
  } = useModalController();

  const closeModal = e => {
    if (!e.target.contains(modalRef.current)) {
      return;
    }

    if (openAddChallenge) {
      isOpenAddChallenge();
    }

    if (openChallengeList) {
      isOpenChallengeList();
    }
  };

  return (
    <Modal ref={modalRef} onClick={closeModal}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

export default ModalWrapper;
