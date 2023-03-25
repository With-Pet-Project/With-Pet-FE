/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

const Main = styled.div`
  flex-grow: 1;
  width: 100%;

  &::before {
    display: block;
    content: '';
    height: 20px;
  }

  @media screen and (max-width: ${vars.normal}) {
    &::before {
      height: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 950px;
  // width: 100%;
  min-height: 100%;
  height: 100%;

  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  margin: 0 auto;

  @media screen and (max-width: ${vars.normal}) {
    width: calc(100% - 20px);
    margin: 20px 10px;
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
