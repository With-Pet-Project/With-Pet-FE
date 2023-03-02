import './index.scss';
import { forwardRef } from 'react';
import content1 from '../../../../lib/assets/images/landing/section/section06/image_00.png';
import content2 from '../../../../lib/assets/images/landing/section/section06/image_01.png';

const SixthSection = forwardRef((props, ref) => {
  return (
    <section className="landing-sixth-section" ref={ref}>
      <div className="landing-sixth-section-background">
        <div className="landing-sixth-section-title">
          <h2>기타 기능</h2>
        </div>
        <div className="landing-sixth-section-img">
          <div>
            <img src={content1} alt="내 주변 병원 찾기" />
          </div>
          <div>
            <img src={content2} alt="병원 평점 및 리뷰확인" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default SixthSection;
