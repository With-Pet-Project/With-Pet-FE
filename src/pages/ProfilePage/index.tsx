import styled from 'styled-components';
import Profile from 'components/auth/Profile/Profile';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function ProfilePage() {
  return (
    <main>
      <Article>
        <Profile />
      </Article>
    </main>
  );
}

export default ProfilePage;
