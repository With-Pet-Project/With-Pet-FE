import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SidebarContainer from '../../components/common/Sidebar/SidebarContainer';

const Wrapper = styled.div`
  display: flex;

  & main {
    flex-grow: 1;
  }
`;

function CommonLayoutPage() {
  return (
    <Wrapper className="common-page-root-div">
      <SidebarContainer />
      <Outlet />
    </Wrapper>
  );
}

export default CommonLayoutPage;
