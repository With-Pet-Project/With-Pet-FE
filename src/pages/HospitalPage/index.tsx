import styled from 'styled-components';
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
        <Hospital />
      </Article>
    </main>
  );
}

export default HospitalPage;
