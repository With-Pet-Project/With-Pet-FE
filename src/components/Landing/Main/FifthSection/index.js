import './index.scss';
import { forwardRef } from 'react';
import title from '../../../../lib/assets/images/landing/section/section05/title.png';
import content from '../../../../lib/assets/images/landing/section/section05/image_00.png';

const FifthSection = forwardRef((props, ref) => {
  return (
    <section className="landing-fifth-section" ref={ref}>
      <div className="landing-fifth-section-background">
        <div className="landing-fifth-section-img">
          <img src={content} alt="섹션4 컨텐츠" />
        </div>
        <div className="landing-fifth-section-title">
          <img src={title} alt="섹션4 타이틀" />
          <div className="landing-fifth-section-text">
            <h2>
              위치에 기반한 반려견
              <br />
              커뮤니티 제공
            </h2>
            <p>
              위치 기반 커뮤니티를 통하여 반려견 관련한 소통과 <br />
              반려견 카페, 병원에 대한 정보를 공유할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FifthSection;
