import { NavLink } from 'react-router-dom';

function Menu({ to, menuName, opened, onClick = f => f, children }) {
  const activeStyle = {
    backgroundColor: '#fff',
  };

  return (
    <li>
      {opened && (
        <NavLink
          to={to}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={onClick}
        >
          <div>
            <div className="side-navbar-menu-img">{children}</div>
            <span>{menuName}</span>
          </div>
        </NavLink>
      )}
    </li>
  );
}

export default Menu;
