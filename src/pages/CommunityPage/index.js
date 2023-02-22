import MainWrapper from 'components/common/Wrapper/MainWrapper';
import CommunityMain from 'components/Community/CommunityMain';
import EnterEditorButton from 'components/Community/EnterEditorButton';

function CommunityPage() {
  const component = {
    Component: EnterEditorButton,
    props: null,
  };

  return (
    <MainWrapper component={component}>
      <CommunityMain />
    </MainWrapper>
  );
}

export default CommunityPage;
