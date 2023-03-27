/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { ReactNode } from 'react';

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

type ComponentType = {
  Component: () => JSX.Element;
};

interface MainWrapperProps {
  children: ReactNode;
  component?: ComponentType;
}

function MainWrapper({ component, children }: MainWrapperProps) {
  const Component = component?.Component;

  return (
    <Main>
      {Component && <Component />}
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  );
}

export default MainWrapper;
