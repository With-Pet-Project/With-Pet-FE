import './Modal.scss';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalContent from './ModalContent';

const $modalRoot = document.querySelector('#modal-root');

function Modal({ closeModal, children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, $modalRoot)}
      {ReactDOM.createPortal(
        <ModalContent>{children}</ModalContent>,
        $modalRoot,
      )}
    </>
  );
}

export default Modal;
