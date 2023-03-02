import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { PetIdProvider } from 'components/Diary/context/PetContext';
import { ModalsProvider } from 'components/common/Modal/context/ModalContext';
import { Modal } from 'components/common/Modal/context/useModal';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/common/ErrorFallback/ErrorFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ModalErrorFallback from 'components/common/Modal/Fallback/Fallback';
import Sidebar from '../../components/common/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;

  & main {
    position: relative;
    flex-grow: 1;
  }
`;

function CommonLayoutPage() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Wrapper className="common-page-root-div">
        <Sidebar />
        <ModalsProvider>
          <PetIdProvider>
            <Outlet />
            <Suspense>
              <ErrorBoundary
                FallbackComponent={ModalErrorFallback}
                onReset={() => window.location.reload()}
              >
                <Modal />
              </ErrorBoundary>
            </Suspense>
          </PetIdProvider>
        </ModalsProvider>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default CommonLayoutPage;
