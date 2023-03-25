import styled from 'styled-components';
import SignUp from 'components/auth/SignUp/SignUp';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function SignUpPage() {
  return (
    <main>
      <Article>
        <SignUp />
      </Article>
    </main>
  );
}

export default SignUpPage;
