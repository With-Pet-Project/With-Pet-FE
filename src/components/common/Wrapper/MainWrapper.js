import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

const Main = styled.div`
  flex-grow: 1;
  &::before,
  &::after {
    display: block;
    content: '';
    height: 40px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 955px;
  min-height: calc(100% - 80px);

  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  margin: 0 auto;

  @media screen and (max-width: ${vars.normal}) {
    margin: 0 10px;
  }
`;

function MainWrapper({ component = null, children }) {
  // const { Component, props } = component;
  return (
    <Main>
      {component && <component.Component {...component.props} />}
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  );
}

export default MainWrapper;
