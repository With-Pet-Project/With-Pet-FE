import '../common/auth.scss';
import { useNavigate } from 'react-router-dom';
import { setSignup } from 'lib/APIs/signup';
import './SignUp.scss';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: passwordCheck } = event.target['password-check'];
    const { value: nickname } = event.target.nickname;
    // 유효성 검사
    // if (password !== passwordCheck) {
    //   alert('비밀번호 확인과 비밀번호가 일치하지 않습니다.');
    // }
    const response = await setSignup(email, password, nickname);

    if (response?.status === 200) {
      alert('회원가입 되었습니다.');
      navigate('/login');
    }
  };

  return (
    <Container>
      <form className="signup-form auth-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="signup-btn button">
            확인
          </button>
        </div>
      </form>
    </Container>
  );
}

export default SignUp;
