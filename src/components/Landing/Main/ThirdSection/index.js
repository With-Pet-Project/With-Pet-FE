import './index.scss';
import { forwardRef } from 'react';
import Challenge from './Challenge';
import Health from './Health';
import SpecialNote from './SpecialNote';
import WeightWalk from './WeightWalk';

import title from '../../../../lib/assets/images/landing/section/section03/title.png';

const ThirdSection = forwardRef((props, ref) => {
  return (
    <section className="landing-third-section" ref={ref}>
      <div className="landing-third-section-background">
        <div className="landing-third-section-title">
          <img src={title} alt="섹션3 타이틀" />
        </div>
        <div className="landing-third-section-content">
          <div>
            <Challenge />
            <Health />
          </div>
          <div>
            <SpecialNote />
            <WeightWalk />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ThirdSection;
