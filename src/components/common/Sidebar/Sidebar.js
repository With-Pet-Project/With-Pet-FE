import './Sidebar.scss';

import { Link, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';

function Sidebar() {
  return (
    <nav className="side-navbar-container">
      <div className="side-navbar-inner-container">
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
            <li>
              <NavLink to="/">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>홈</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/diary">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>다이어리</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>가계부</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>커뮤니티</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/hospital">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>병원찾기</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="side-navbar-menu side-navbar-menu-bottom">
          <ul>
            <li>
              <NavLink to="/mypage">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>마이 페이지</span>
                </div>
              </NavLink>
            </li>
            <li>
              <Link to="/">
                <div>
                  <div className="side-navbar-menu-img" />
                  <span>로그아웃</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
