import DiaryHeader from 'components/Diary/DiaryHeader/DiaryHeader';
import DiaryMain from 'components/Diary/DiaryMain/DiaryMain';
import { Suspense } from 'react';

function DiaryPage() {
  return (
    <main>
      <Suspense>
        <DiaryHeader />
        <DiaryMain />
      </Suspense>
    </main>
  );
}

export default DiaryPage;
