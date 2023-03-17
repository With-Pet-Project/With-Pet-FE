/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOAuth } from 'components/auth/hooks/useOAuth';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

function OAuthCallback() {
  const navigate = useNavigate();
  const jwt_token = useOAuth();

  useEffect(() => {
    if (jwt_token) {
      navigate('/', { replace: true });
    }
  }, [navigate, jwt_token]);

  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <div>Loading...</div>
    </ErrorBoundary>
  );
}

export default OAuthCallback;
