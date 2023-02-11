import './Modal.scss';
import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalContent from './ModalContent';

function Modal({ closeModal, children }) {
  const [elementId] = useState('#modal-root');

  const modalRoot = useMemo(
    () => document.querySelector(`${elementId}`),
    [elementId],
  );

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, modalRoot)}
      {ReactDOM.createPortal(
        <ModalContent>{children}</ModalContent>,
        modalRoot,
      )}
    </>
  );
}

export default Modal;
