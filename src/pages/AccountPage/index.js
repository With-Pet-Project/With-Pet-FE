import styled from 'styled-components';
import Account from 'components/Account/Account';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function AccountPage() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <main>
      <Article>
        <Suspense>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <Account />
          </ErrorBoundary>
        </Suspense>
      </Article>
    </main>
  );
}

export default AccountPage;
