import '../common/auth.scss';
import './ResetPassword.scss';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container/Container';
import Input from '../common/Input/Input';

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    alert('변경되었습니다. 로그인하세요');
    navigate('/login');
  };

  return (
    <Container>
      <form className="reset-password-form auth-form" onSubmit={handleSubmit}>
        <h3 className="title">비밀번호 재설정</h3>
        <label htmlFor="email" className="label">
          새 비밀번호
        </label>
        <Input type="text" id="email" name="email" />
        <label htmlFor="email" className="label">
          새 비밀번호 확인
        </label>
        <Input type="text" id="email" name="email" />
        <p>8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다.</p>
        <button type="submit" className="button reset-btn">
          재설정
        </button>
      </form>
    </Container>
  );
}
export default ResetPassword;
