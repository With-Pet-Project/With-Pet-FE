import styled from 'styled-components';
import LogIn from 'components/auth/LogIn/LogIn';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function LogInPage() {
  return (
    <main>
      <Article>
        <LogIn />
      </Article>
    </main>
  );
}

export default LogInPage;
