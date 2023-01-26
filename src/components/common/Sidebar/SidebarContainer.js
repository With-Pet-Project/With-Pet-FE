import './SidebarContainer.scss';

import { Link } from 'react-router-dom';

function SidebarContainer() {
  return (
    <div className="side-navbar-container">
      <div className="side-navbar-top-logo">
        <div className="logo-img">Logo</div>
      </div>
      <div className="side-navbar-menu">
        <ul>
          <Link to="/">
            <li>
              <span>홈</span>
            </li>
          </Link>
          <Link to="/diary">
            <li>
              <span>다이어리</span>
            </li>
          </Link>
          <Link to="/accounts">
            <li>
              <span>가계부</span>
            </li>
          </Link>
          <Link to="/community">
            <li>
              <span>커뮤니티</span>
            </li>
          </Link>
          <Link to="/hospital">
            <li>
              <span>병원찾기</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="side-navbar-menu side-navbar-menu-bottom">
        <ul>
          <Link to="/mypage">
            <li>
              <span>마이 페이지</span>
            </li>
          </Link>
          <li>
            <span>로그아웃</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarContainer;
