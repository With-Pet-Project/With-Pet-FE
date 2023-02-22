import styled from 'styled-components';

const Main = styled.main`
  &::before,
  &::after {
    display: block;
    content: '';
    height: 40px;
  }
`;

const ContentWrapper = styled.div`
  width: 85%;
  max-width: 955px;
  min-height: calc(100% - 80px);

  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  margin: 0 auto;
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
