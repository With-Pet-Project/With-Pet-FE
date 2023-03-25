import { ReactElement } from 'react';
import './Logo.scss';
import logo from 'lib/assets/images/landing/logo.png';

function Logo(): ReactElement {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
