import './SidebarContainer.scss';

function SidebarContainer() {
  return (
    <div className="side-navbar-container">
      <div className="side-navbar-top-logo">
        <div className="logo-img">Logo</div>
      </div>
      <div className="side-navbar-menu">
        <ul>
          <li>
            <span>홈</span>
          </li>
          <li>
            <span>다이어리</span>
          </li>
          <li>
            <span>가계부</span>
          </li>
          <li>
            <span>커뮤니티</span>
          </li>
          <li>
            <span>병원찾기</span>
          </li>
        </ul>
      </div>
      <div className="side-navbar-menu side-navbar-menu-bottom">
        <ul>
          <li>
            <span>마이 페이지</span>
          </li>
          <li>
            <span>로그아웃</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarContainer;
