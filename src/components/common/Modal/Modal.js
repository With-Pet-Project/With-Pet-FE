import './Modal.scss';
import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalContent from './ModalContent';

const $modalRoot = document.querySelector('#modal-root');

function Modal({ className, closeModal, children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, $modalRoot)}
      {ReactDOM.createPortal(
        <ModalContent>{{ child: children, className }}</ModalContent>,
        $modalRoot,
      )}
    </>
  );
}

export default Modal;
