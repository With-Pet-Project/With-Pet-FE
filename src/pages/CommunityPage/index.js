import styled from 'styled-components';

import CommunityMain from 'components/Community/CommunityMain';

const Main = styled.main`
  &::before {
    display: block;
    content: '';
    height: 25px;
  }

  &::after {
    display: block;
    content: '';
    height: 25px;
  }
`;

function CommunityPage() {
  return (
    <Main>
      <CommunityMain />
    </Main>
  );
}

export default CommunityPage;
