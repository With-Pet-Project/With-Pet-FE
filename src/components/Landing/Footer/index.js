import './index.scss';
import logo from '../../../lib/assets/images/landing/section/footer/logo.png';

function Footer() {
  return (
    <footer className="landing-footer">
      <div>
        <img src={logo} alt="footer 로고" />
      </div>
    </footer>
  );
}

export default Footer;
