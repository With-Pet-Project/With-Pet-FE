import styled from 'styled-components';
import AccountHeader from 'components/Account/AccountHeader/AccountHeader';
import AccountMain from 'components/Account/AccountMain/AccountMain';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function AccountPage() {
  return (
    <main>
      <Article>
        <AccountHeader />
        <AccountMain />
      </Article>
    </main>
  );
}

export default AccountPage;
