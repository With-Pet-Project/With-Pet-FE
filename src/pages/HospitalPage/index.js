import styled from 'styled-components';
import HeaderContainer from '../../components/common/Header/HeaderContainer';
import Hospital from '../../components/Hospital/Hospital';

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function HospitalPage() {
  return (
    <main>
      <Article>
        <HeaderContainer>병원찾기</HeaderContainer>
        <Hospital />
      </Article>
    </main>
  );
}

export default HospitalPage;
