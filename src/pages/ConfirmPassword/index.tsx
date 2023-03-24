import styled from 'styled-components';
import ConfirmPassword from 'components/auth/ConfirmPassword/ConfirmPassword';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function ConfirmPasswordPage() {
  return (
    <main>
      <Article>
        <ConfirmPassword />
      </Article>
    </main>
  );
}

export default ConfirmPasswordPage;
