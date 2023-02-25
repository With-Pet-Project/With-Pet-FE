import './index.scss';
import Challenge from './Challenge';
import Health from './Health';

import title from '../../../lib/assets/images/landing/section/section03/title.png';

function ThirdSection() {
  return (
    <section className="landing-third-section">
      <div className="landing-third-section-background">
        <div className="landing-second-section-title">
          <img src={title} alt="섹션3 타이틀" />
        </div>
      </div>
      <div className="landing-third-section-content">
        <Challenge />
        <Health />
      </div>
    </section>
  );
}

export default ThirdSection;
