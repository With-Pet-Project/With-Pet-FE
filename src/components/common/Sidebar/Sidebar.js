/* eslint-disable camelcase */
import './Sidebar.scss';
import { vars } from 'lib/styles/vars';
import styled from 'styled-components';

import { useState } from 'react';
import { useUser } from 'components/auth/hooks/useUser';
import { useLogout } from 'components/auth/hooks/useLogout';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Home from './svg/Home';
import Diary from './svg/Diary';
import Community from './svg/Community';
import Account from './svg/Account';
import Hospital from './svg/Hospital';
import Profile from './svg/Profile';
import Logout from './svg/Logout';

import Logo from '../Logo/Logo';
import UserInfo from './UserInfo/UserInfo';

const NavContainer = styled.nav`
  min-width: ${vars.sidebarClosed};

  @media screen and (max-width: ${vars.narrow}) {
    width: ${({ opened }) => (opened ? '100vw' : `${vars.sidebarClosed}`)};
    height: ${({ opened }) => (opened ? '100vh' : `${vars.sidebarClosed}`)};
  }
`;

const InnerContainer = styled.div`
  width: ${({ opened }) =>
    opened ? `${vars.sidebarOpened}` : `${vars.sidebarClosed}`};
  height: 100%;

  @media screen and (max-width: ${vars.narrow}) {
    width: ${({ opened }) => (opened ? '100vw' : '0')};
    height: ${({ opened }) => (opened ? '100vh' : `${vars.sidebarClosed}`)};
    background-color: ${({ opened }) =>
      opened ? `${vars.backgroundYellow}` : 'transparent'} !important;
  }
`;

const Navigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  transition-delay: ${({ opened }) => (opened ? '.3s' : '0')};

  @media screen and (max-width: ${vars.narrow}) {
    overflow-y: ${({ opened }) => (opened ? 'auto' : 'hidden')};
  }
`;

function Sidebar() {
  const { logout } = useLogout();
  const user = useUser();
  const [open, setOpen] = useState(false);

  const isMouseEnter = e => {
    e.preventDefault();
    setOpen(true);
  };

  const isMouseLeave = e => {
    e.preventDefault();
    setOpen(false);
  };

  const handleHamburger = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <NavContainer className="side-navbar-container" opened={open}>
      <InnerContainer
        data-testid="sidebar"
        className="side-navbar-inner-container"
        opened={open}
        onMouseEnter={isMouseEnter}
        onMouseLeave={isMouseLeave}
        onClick={handleHamburger}
      >
        <Hamburger opened={open} data-cy="side-bar-hamburger" />

        <Navigation opened={open}>
          <div className="side-navbar-top">
            <div className="logo-box">
              <Logo />
            </div>
            <div className="user-info-box">
              <UserInfo user={user} />
            </div>
          </div>
          <div className="side-navbar-menu">
            <ul>
              <Menu to="/" menuName="홈" opened={open}>
                <Home />
              </Menu>
              <Menu
                to={user ? '/diary' : '/login'}
                menuName="다이어리"
                opened={open}
              >
                <Diary />
              </Menu>
              <Menu
                to={user ? '/account' : '/login'}
                menuName="가계부"
                opened={open}
              >
                <Account />
              </Menu>
              <Menu to="/community" menuName="커뮤니티" opened={open}>
                <Community />
              </Menu>
              <Menu to="/hospital" menuName="내 주변 병원 찾기" opened={open}>
                <Hospital />
              </Menu>
            </ul>
          </div>
          <div className="side-navbar-menu side-navbar-menu-bottom">
            <ul>
              {user ? (
                <>
                  <Menu to="/profile" menuName="마이 페이지" opened={open}>
                    <Profile />
                  </Menu>
                  <li>
                    {open && (
                      <button type="button" onClick={logout}>
                        <div className="side-navbar-menu-img">
                          <Logout />
                        </div>
                        <span>로그아웃</span>
                      </button>
                    )}
                  </li>
                </>
              ) : (
                <Menu to="/login" menuName="로그인" opened={open}>
                  <Profile />
                </Menu>
              )}
            </ul>
          </div>
        </Navigation>
      </InnerContainer>
    </NavContainer>
  );
}

export default Sidebar;
