import styled from 'styled-components';

import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

import Main from 'components/Landing/Main';
import Footer from 'components/Landing/Footer';

const Wrapper = styled.div`
  flex-grow: 1;
`;

function LandingPage() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Wrapper>
      <main>
        <Suspense>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <Main />
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
}

export default LandingPage;
