import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { ModalsProvider } from 'components/common/Modal/context/ModalContext';
import { Modal } from 'components/common/Modal/context/useModal';
import Sidebar from '../../components/common/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;

  & main {
    position: relative;
    flex-grow: 1;
  }
`;

function CommonLayoutPage() {
  return (
    <Wrapper className="common-page-root-div">
      <Sidebar />
      <ModalsProvider>
        <Outlet />
        <Modal />
      </ModalsProvider>
    </Wrapper>
  );
}

export default CommonLayoutPage;
