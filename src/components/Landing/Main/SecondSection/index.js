import './index.scss';
import { forwardRef } from 'react';

const SecondSection = forwardRef((props, ref) => {
  return (
    <section className="landing-second-section" ref={ref}>
      <div className="landing-second-section-background">
        <div className="landing-second-section-title">
          <h2>소중한 반려견을 위한 건강 다이어리</h2>
          <p>
            다이어리를 통해 주 단위로 챌린지를 추가하고, 반려견의 건강을 관리할
            수 있습니다.
          </p>
          <p>
            또한 매일 반려견의 건강이슈와 일기를 기록할 수 있고, 평균수치를 매일
            확인할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
});

export default SecondSection;
