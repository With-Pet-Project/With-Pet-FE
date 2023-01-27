import './CommunityHeaderContainer.scss';
import styled from 'styled-components';

import { useState } from 'react';

import HeaderContainer from 'components/common/Header/HeaderContainer';
import SearchContainer from 'components/Community/Search/SearchContainer';

const TitleDiv = styled.div`
  display: ${({ focus }) => (focus ? 'none' : 'block')};
`;

function CommunityHeaderContainer() {
  const [focus, setFocus] = useState(false);

  const isFocus = () => setFocus(!focus);

  return (
    <HeaderContainer>
      <div className="community-header-container">
        <TitleDiv className="community-Header-title" focus={focus}>
          커뮤니티
        </TitleDiv>
        <SearchContainer focus={focus} isFocus={isFocus} />
      </div>
    </HeaderContainer>
  );
}

export default CommunityHeaderContainer;
