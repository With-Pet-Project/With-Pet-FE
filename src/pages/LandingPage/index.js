import RefContextProvider from 'components/Landing/context/RefProvider';
import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

import FirstSection from 'components/Landing/FirstSection';
import SecondSection from 'components/Landing/SecondSection';
import ThirdSection from 'components/Landing/ThirdSection';

function LandingPage() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <main>
      <Suspense>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
          <RefContextProvider>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
          </RefContextProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}

export default LandingPage;
