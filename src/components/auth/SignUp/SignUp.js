import '../common/auth.scss';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 회원가입 처리
    alert('회원가입 되었습니다.');
    navigate('/login');
  };

  return (
    <Container>
      <form className="signup-form auth-form">
        <h3 className="title">회원가입</h3>
        <label htmlFor="email" className="label">
          아이디
        </label>
        <Input type="text" id="email" name="email" />
        <label htmlFor="password" className="password">
          비밀번호
        </label>
        <Input type="password" id="password" name="password" />
        <label htmlFor="password-check" className="label">
          비밀번호 확인
        </label>
        <Input type="password" id="password-check" name="password-check" />
        <label htmlFor="nickname" className="label">
          닉네임
        </label>
        <Input type="text" id="nickname" name="nickname" />
        <div className="btn-wrapper">
          <button type="button" className=" button">
            취소
          </button>
          <button
            type="submit"
            className="signup-btn button"
            onClick={handleSubmit}
          >
            확인
          </button>
        </div>
      </form>
    </Container>
  );
}

export default SignUp;
