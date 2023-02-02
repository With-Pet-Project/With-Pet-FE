import styled from 'styled-components';
import Header from '../../components/common/Header/Header';
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
        <Header>병원찾기</Header>
        <Hospital />
      </Article>
    </main>
  );
}

export default HospitalPage;
