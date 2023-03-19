import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Account from 'components/Account/Account';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #ffe259;

  h1 {
    font-family: TmoneyRoundWindBold;
    margin-top: 150px;
    font-variation-settings: 'wght' 700;
    font-size: 15rem;

    color: #48341b;
  }

  h2 {
    font-family: TmoneyRoundWindNormal;
    margin-top: 25px;
    color: #48341b;
    font-size: 1.5rem;
  }

  button {
    font-family: TmoneyRoundWindNormal;
    font-size: 1.2rem;
    width: 200px;
    border-radius: 10px;
    margin-top: 150px;
    padding: 12px;
    background-color: #5d949c;
    color: #fff;
  }
`;

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <button type="button" onClick={() => navigate('/')}>
        홈으로 가기
      </button>
    </Wrapper>
  );
}

export default NotFoundPage;
