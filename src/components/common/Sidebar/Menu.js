import { NavLink } from 'react-router-dom';

function Menu({ to, menuName }) {
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
          <div className="side-navbar-menu-img" />
          <span>{menuName}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default Menu;
