import './CommunityHeader.scss';
import styled from 'styled-components';

import { useState } from 'react';

import Header from 'components/common/Header/Header';
import Search from 'components/Community/Search/Search';

const TitleDiv = styled.div`
  display: ${({ focus }) => (focus ? 'none' : 'block')};
`;

function CommunityHeader() {
  const [focus, setFocus] = useState(false);

  const isFocus = () => setFocus(!focus);

  return (
    <Header>
      <div className="community-header-container">
        <TitleDiv className="community-Header-title" focus={focus}>
          커뮤니티
        </TitleDiv>
        <Search focus={focus} isFocus={isFocus} />
      </div>
    </Header>
  );
}

export default CommunityHeader;
