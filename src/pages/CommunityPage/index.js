import styled from 'styled-components';
import CommunityMain from 'components/Community/CommunityMain';

const Main = styled.main`
  &::before,
  &::after {
    display: block;
    content: '';
    height: 40px;
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
