import HeaderContainer from '../../components/common/Header/HeaderContainer';
import Hospital from '../../components/Hospital/Hospital';

function HospitalPage() {
  return (
    <main>
      <article>
        <HeaderContainer>병원찾기</HeaderContainer>
        <Hospital />
      </article>
    </main>
  );
}

export default HospitalPage;
