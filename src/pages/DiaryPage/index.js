import DiaryHeader from 'components/Diary/DiaryHeader/DiaryHeader';
import DiaryMain from 'components/Diary/DiaryMain/DiaryMain';

import { Modal } from 'components/common/Modal/context/useModal';

function DiaryPage() {
  return (
    <main>
      <DiaryHeader />
      <DiaryMain />
      <Modal />
    </main>
  );
}

export default DiaryPage;
