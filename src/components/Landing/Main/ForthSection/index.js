import './index.scss';
import { forwardRef } from 'react';
import title from '../../../../lib/assets/images/landing/section/section04/title.webp';
import content from '../../../../lib/assets/images/landing/section/section04/image_00.webp';

const ForthSection = forwardRef((props, ref) => {
  return (
    <section className="landing-forth-section" ref={ref}>
      <div className="landing-forth-section-background">
        <div className="landing-forth-section-title">
          <img src={title} alt="커뮤티니 텍스트 이미지" />
          <div className="landing-forth-section-text">
            <h2>
              자체 가계부를 통한
              <br />
              반려견 소비 기록
            </h2>
            <p>
              가계부를 통하여 반려견에 대한 소비를 기록하고,
              <br />각 반려견 별로 지출을 관리할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="landing-forth-section-img">
          <img src={content} alt="커뮤니티 예시 이미지" />
        </div>
      </div>
    </section>
  );
});

export default ForthSection;
