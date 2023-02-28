import DiaryHeader from 'components/Diary/DiaryHeader/DiaryHeader';
import DiaryMain from 'components/Diary/DiaryMain/DiaryMain';
import { Suspense } from 'react';
import { PetIdProvider } from 'components/Diary/context/PetContext';

function DiaryPage() {
  return (
    <main>
      <Suspense>
        <PetIdProvider>
          <DiaryHeader />
          <DiaryMain />
        </PetIdProvider>
      </Suspense>
    </main>
  );
}

export default DiaryPage;
