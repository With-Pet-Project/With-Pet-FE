import MainWrapper from 'components/common/Wrapper/MainWrapper';
import CommunityMain from 'components/Community/CommunityMain';
import EnterEditorButton from 'components/Community/EnterEditorButton';
import { Suspense } from 'react';

function CommunityPage() {
  const component = {
    Component: EnterEditorButton,
    props: null,
  };

  return (
    <MainWrapper component={component}>
      <Suspense>
        <CommunityMain />
      </Suspense>
    </MainWrapper>
  );
}

export default CommunityPage;
