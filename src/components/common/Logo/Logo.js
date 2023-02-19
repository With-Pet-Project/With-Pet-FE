import './Logo.scss';
import logo from 'lib/assets/아카이브/홈화면/logo.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
