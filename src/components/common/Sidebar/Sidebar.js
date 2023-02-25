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
  flex-direction: column;
  min-height: 93vh;
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
              <Menu to="/" menuName="홈">
                <Home />
              </Menu>
              <Menu to="/diary" menuName="다이어리">
                <Diary />
              </Menu>
              <Menu to="/account" menuName="가계부">
                <Account />
              </Menu>
              <Menu to="/community" menuName="커뮤니티">
                <Community />
              </Menu>
              <Menu to="/hospital" menuName="내 주변 병원 찾기">
                <Hospital />
              </Menu>
            </ul>
          </div>
          <div className="side-navbar-menu side-navbar-menu-bottom">
            <ul>
              {user ? (
                <>
                  <Menu to="/profile" menuName="마이 페이지">
                    <Profile />
                  </Menu>
                  <Menu to="/" menuName="로그아웃" onClick={logout}>
                    <Logout />
                  </Menu>
                </>
              ) : (
                <Menu to="/login" menuName="로그인">
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
