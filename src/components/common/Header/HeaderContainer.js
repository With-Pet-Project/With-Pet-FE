import './HeaderContainer.scss';

function HeaderContainer({ children }) {
  return <header className="common-header-container">{children}</header>;
}

export default HeaderContainer;

// 여기서 Container는 말 그대로 Container, item 할 때 Container입니다.
// (비지니스 로직 담는 컴포넌트 X)
// (단순 레이아웃 O)
