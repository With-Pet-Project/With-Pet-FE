import styled from 'styled-components';
import ResetPassword from 'components/auth/ResetPassword/ResetPassword';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function ResetPasswordPage() {
  return (
    <main>
      <Article>
        <ResetPassword />
      </Article>
    </main>
  );
}

export default ResetPasswordPage;
