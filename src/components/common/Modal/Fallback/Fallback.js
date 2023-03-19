import './Fallback.scss';

import { TOAST_MESSAGE } from 'components/common/Toast/toast';
import { ModalWrapper, ModalContent } from '../context/Modal';

function ModalErrorFallback({ error, resetErrorBoundary }) {
  console.log('error Message: ', error.message);

  return (
    <ModalWrapper>
      <ModalContent className="diary-error-fallback">
        <p>{TOAST_MESSAGE.CANNOT_GET_DATA}</p>
        <p>서버와의 연결이 불안정합니다...</p>
        <button type="button" onClick={resetErrorBoundary}>
          새로고침
        </button>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ModalErrorFallback;
