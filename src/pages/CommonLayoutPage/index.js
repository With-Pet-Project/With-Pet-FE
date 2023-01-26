import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SidebarContainer from '../../components/common/Sidebar/SidebarContainer';

const StyledDiv = styled.div`
  display: flex;
`;

function CommonLayoutPage() {
  return (
    <StyledDiv className="common-page-root-div">
      <SidebarContainer />
      <Outlet />
    </StyledDiv>
  );
}

export default CommonLayoutPage;
