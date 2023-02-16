import { ModalsProvider } from 'components/common/Modal/context/ModalContext';

import DiaryHeader from 'components/Diary/DiaryHeader/DiaryHeader';
import DiaryMain from 'components/Diary/DiaryMain/DiaryMain';

function DiaryPage() {
  return (
    <main>
      <ModalsProvider>
        <DiaryHeader />
        <DiaryMain />
      </ModalsProvider>
    </main>
  );
}

export default DiaryPage;
