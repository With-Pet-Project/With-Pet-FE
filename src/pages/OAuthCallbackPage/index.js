import styled from 'styled-components';
import OAuthCallback from 'components/auth/OAuthCallback/OAuthCallback';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  & div {
    font-family: 'TmoneyRoundWindBold';
    font-size: 20px;

    vertical-align: middle;

    width: 100px;
    height: 100px;
    margin: 300px auto;
  }
`;

function OAuthCallbackPage() {
  return (
    <Wrapper>
      <OAuthCallback />
    </Wrapper>
  );
}

export default OAuthCallbackPage;
