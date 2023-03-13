/* eslint-disable camelcase */
import './Sidebar.scss';
import { vars } from 'lib/styles/vars';
import styled from 'styled-components';

import { useState } from 'react';
import { useUser } from 'components/auth/hooks/useUser';
import { useLogout } from 'components/auth/hooks/useLogout';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Home from './img/Home';
import Diary from './img/Diary';
import Community from './img/Community';
import Account from './img/Account';
import Hospital from './img/Hospital';
import Profile from './img/Profile';
import Logout from './img/Logout';

import Logo from '../Logo/Logo';
import UserInfo from './UserInfo/UserInfo';

// import { useOutsideDetection } from '../hooks/useOutsideDetection';

const NavContainer = styled.nav`
  min-width: ${vars.sidebarClosed};
`;

const InnerContainer = styled.div`
  width: ${({ opened }) =>
    opened ? `${vars.sidebarOpened}` : `${vars.sidebarClosed}`};
`;

const Navigation = styled.div`
  display: flex;
  // flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  transition-delay: ${({ opened }) => (opened ? '.15s' : '0')};
`;

function Sidebar() {
  // const { open, isOpen, targetRef } = useOutsideDetection();
  const user = useUser();
  const { logout } = useLogout();
  const [open, setOpen] = useState(false);
  const isMouseOver = () => setOpen(true);
  const isMouseLeave = () => setOpen(false);

  return (
    <NavContainer className="side-navbar-container" opened={open}>
      <InnerContainer
        className="side-navbar-inner-container"
        opened={open}
        onMouseOver={isMouseOver}
        onMouseLeave={isMouseLeave}
      >
        <Hamburger opened={open} />
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
