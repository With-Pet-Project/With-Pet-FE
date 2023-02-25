import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

import Main from 'components/Landing/Main';

function LandingPage() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <main>
      <Suspense>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
          <Main />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}

export default LandingPage;
