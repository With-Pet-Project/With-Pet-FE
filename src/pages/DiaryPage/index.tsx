import styled from 'styled-components';
import DiaryHeader from 'components/Diary/DiaryHeader/DiaryHeader';
import DiaryMain from 'components/Diary/DiaryMain/DiaryMain';
import { Suspense } from 'react';
import Loading from 'components/common/Loading/Loading';
import topLeft from 'lib/assets/images/diary/bg_bg_white.png';
import bottomRight from 'lib/assets/images/diary/bg_sm_white.png';

const Background = styled.div`
  height: 100%;
  background-color: #fff;
  background-image: url(${topLeft}), url(${bottomRight});
  background-position: top left, 110% 110%;
  background-size: 60% 50%, 30% 400px;
  background-repeat: no-repeat;
`;

function DiaryPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Background className="diary-background">
          <DiaryHeader />
          <DiaryMain />
        </Background>
      </Suspense>
    </main>
  );
}

export default DiaryPage;
