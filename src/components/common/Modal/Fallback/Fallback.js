import './Fallback.scss';

import { TOAST_MESSAGE } from 'components/common/Toast/toast';
import { ModalWrapper, ModalContent } from '../context/useModal';

function ModalErrorFallback({ error, resetErrorBoundary }) {
  console.log('error Message: ', error.message);

  return (
    <ModalWrapper>
      <ModalContent className="diary-error-fallback">
        <p>{TOAST_MESSAGE.CANNOT_GET_DATA}</p>
        <p>모달창을 띄울 수 없습니다...</p>
        <button type="button" onClick={resetErrorBoundary}>
          새로고침
        </button>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ModalErrorFallback;
