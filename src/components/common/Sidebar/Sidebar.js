import './Sidebar.scss';
import { vars } from 'lib/styles/vars';
import styled from 'styled-components';

import Menu from './Menu';
import Hamburger from './Hamburger';

import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';

import { useOutsideDetection } from '../hooks/useOutsideDetection';

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
  const { open, isOpen, targetRef } = useOutsideDetection();

  return (
    <NavContainer className="side-navbar-container" opened={open}>
      <InnerContainer
        className="side-navbar-inner-container"
        opened={open}
        ref={targetRef}
      >
        <Hamburger onClick={isOpen} opened={open} />
        <Navigation opened={open}>
          <div className="side-navbar-top">
            <div className="logo-box">
              <Logo />
            </div>
            <div className="user-info-box">
              <UserInfo />
            </div>
          </div>
          <div className="side-navbar-menu">
            <ul>
              <Menu to="/" menuName="홈" />
              <Menu to="/diary" menuName="다이어리" />
              <Menu to="/account" menuName="가계부" />
              <Menu to="/community" menuName="커뮤니티" />
              <Menu to="/hospital" menuName="내 주변 병원 찾기" />
              <Menu to="/editor" menuName="글쓰기" />
            </ul>
          </div>
          <div className="side-navbar-menu side-navbar-menu-bottom">
            <ul>
              <Menu to="/mypage" menuName="마이 페이지" />
              <Menu to="/logout" menuName="로그아웃" />
            </ul>
          </div>
        </Navigation>
      </InnerContainer>
    </NavContainer>
  );
}

export default Sidebar;
