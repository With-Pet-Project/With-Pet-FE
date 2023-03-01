import './Fallback.scss';

import { TOAST_MESSAGE } from 'components/common/Toast/toast';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="diary-error-fallback" role="alert">
      <p>{TOAST_MESSAGE.CANNOT_GET_DATA}</p>
      <button type="button" onClick={resetErrorBoundary}>
        새로고침
      </button>
    </div>
  );
}

export default ErrorFallback;
