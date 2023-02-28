import '../common/auth.scss';
import './ConfirmPassword.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';

function ConfirmPassword() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    // 확인되었는지 처리
    event.preventDefault();
    navigate('/reset-password');
  };

  return (
    <Container>
      <form className="confirm-pwd-form auth-form" onSubmit={handleSubmit}>
        <h3 className="title">본인 인증</h3>
        <label htmlFor="email" className="label">
          비밀번호를 찾고자하는 아이디를 입력하세요.
        </label>
        <div className="confirm-id-wrapper">
          <Input
            type="text"
            id="email"
            name="email"
            className="id-confirm-input"
          />
          <button type="button" className="confirm-id-btn button">
            인증
          </button>
        </div>
        <div className="btn-wrapper">
          <p>입력한 이메일에서 인증을 진행한 뒤 확인버튼을 눌러주세요.</p>
          <button type="submit" className="confirm-password-btn button">
            확인
          </button>
        </div>
      </form>
    </Container>
  );
}

export default ConfirmPassword;
