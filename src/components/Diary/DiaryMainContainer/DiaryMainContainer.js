import './DiaryMainContainer.scss';

import CenterSection from './sections/CenterSection/CenterSection';
import WalkingSection from './sections/WalkingSection/WalkingSection';
import WeightSection from './sections/WeightSection/WeightSection';
import HealthSection from './sections/HealthSection/HealthSection';
import SpecialNoteSection from './sections/SpecialNoteSection/SpecialNoteSection';

function DiaryMainContainer() {
  return (
    <div className="diary-main-container">
      <div className="diary-main-flex-container">
        <div className="diary-main-left-section">
          <CenterSection />
          <HealthSection />
        </div>
        <div className="diary-main-right-section">
          <WalkingSection />
          <WeightSection />
          <SpecialNoteSection />
        </div>
      </div>
    </div>
  );
}

export default DiaryMainContainer;
