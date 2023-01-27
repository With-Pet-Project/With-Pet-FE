import './SidebarContainer.scss';

import { Link } from 'react-router-dom';

function SidebarContainer() {
  return (
    <div className="side-navbar-container">
      <div className="side-navbar-inner-container">
        <div className="side-navbar-top-logo">
          <div className="logo-img">Logo</div>
        </div>
        <div className="side-navbar-menu">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/diary">다이어리</Link>
            </li>
            <li>
              <Link to="/accounts">가계부</Link>
            </li>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
            <li>
              <Link to="/hospital">병원찾기</Link>
            </li>
          </ul>
        </div>
        <div className="side-navbar-menu side-navbar-menu-bottom">
          <ul>
            <li>
              <Link to="/mypage">마이 페이지</Link>
            </li>
            <li>
              <Link to="/">로그아웃</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarContainer;
