import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

const Button = styled.button`
  display: ${({ opened }) => (opened ? 'none' : 'block')};
  cursor: pointer;
  background-color: transparent;
  width: 40px;
  margin: 20px 0 0 -4px;

  & span {
    display: block;
    background-color: #fff;
    width: 100%;
    height: 4px;
    margin: 5px 0;
    border-radius: 10px;
  }

  @media screen and (max-width: ${vars.narrow}) {
    display: block;
    position: fixed;
    top: -3px;
    left: 3px;
    z-index: 11;

    border-radius: 8px;
    width: 45px;
    height: 36px;
    margin: 9px 0 0 0;

    & span {
      width: 80%;
      margin: 5px 2px;
      background-color: ${vars.backgroundLightBrown};
    }

    & span:first-child {
      transform: rotate(${({ opened }) => (opened ? '45deg' : '0')});
      margin-bottom: ${({ opened }) => (opened ? '-9px' : '2px')};
    }
    & span:nth-child(2) {
      background-color: ${({ opened }) =>
        opened ? 'transparent' : `${vars.backgroundLightBrown}`};
    }
    & span:last-child {
      transform: rotate(${({ opened }) => (opened ? '-45deg' : '0')});
      margin-top: ${({ opened }) => (opened ? '-9px' : '2px')};
    }
  }
`;

function Hamburger({ opened, ...props }) {
  return (
    <Button
      type="button"
      {...props}
      opened={opened}
      aria-label="Sidebar On and Off"
    >
      <span />
      <span />
      <span />
    </Button>
  );
}

export default Hamburger;
