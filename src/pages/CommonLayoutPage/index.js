import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../../components/common/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;

  & main {
    flex-grow: 1;
  }
`;

function CommonLayoutPage() {
  return (
    <Wrapper className="common-page-root-div">
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}

export default CommonLayoutPage;
