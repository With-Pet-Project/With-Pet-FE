import { NavLink } from 'react-router-dom';

function Menu({ to, menuName, children }) {
  const activeStyle = {
    backgroundColor: '#fff',
  };

  return (
    <li>
      <NavLink
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div>
          <div className="side-navbar-menu-img">{children}</div>
          <span>{menuName}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default Menu;
