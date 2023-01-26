import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import HeaderContainer from '../../components/common/Header/HeaderContainer';
import SidebarContainer from '../../components/common/Sidebar/SidebarContainer';

const StyledDiv = styled.div`
  display: flex;
`;

function CommonLayoutPage() {
  return (
    <StyledDiv className="common-page-root-div">
      <SidebarContainer />
      <div>
        <HeaderContainer />
        <Outlet />
      </div>
    </StyledDiv>
  );
}

export default CommonLayoutPage;
