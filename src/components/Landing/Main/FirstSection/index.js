import './index.scss';
import Logo from 'components/common/Logo/Logo';
import title from 'lib/assets/images/landing/section/section01/title.png';
import titleLow from 'lib/assets/images/landing/section/section01/title_low.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'components/auth/hooks/useUser';
import ProgressiveImg from 'components/common/ProgressiveImg/ProgressiveImg';
import Navigation from './Navigation/Navigation';

function FirstSection({
  moveToSecond,
  moveToThird,
  moveToForth,
  moveToFifth,
  moveToSixth,
}) {
  const user = useUser();
  const navigate = useNavigate();
  const gotoLogin = () => navigate('/login');

  return (
    <section className="landing-first-section">
      <div className="landing-first-section-background">
        <div className="landing-first-section-logo">
          <Logo />
        </div>
        <div className="landing-first-section-title-text">
          <ProgressiveImg
            imgSrc={title}
            placeholderSrc={titleLow}
            alt="타이틀 텍스트 이미지"
          />
          <h2>소중한 반려견을 위한 건강 다이어리</h2>
        </div>
        <div className="landing-first-section-login-btn">
          {!user && (
            <button type="button" onClick={gotoLogin} data-cy="move-login-btn">
              <span>로그인</span>
            </button>
          )}
        </div>
        <Navigation
          moveToSecond={moveToSecond}
          moveToThird={moveToThird}
          moveToForth={moveToForth}
          moveToFifth={moveToFifth}
          moveToSixth={moveToSixth}
        />
      </div>
    </section>
  );
}

export default FirstSection;
