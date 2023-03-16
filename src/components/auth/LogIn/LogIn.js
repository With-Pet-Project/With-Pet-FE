/* eslint-disable jsx-a11y/anchor-is-valid */
import '../common/auth.scss';
import './LogIn.scss';
import { Link, useNavigate } from 'react-router-dom';
import { KAKAO_OAUTH_URL } from 'lib/KakaoAPIs/client';
import { localLogin } from 'lib/APIs/login';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import Container from '../common/Container/Container';
import Input from '../common/Input/Input';

function LogIn() {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    if (!email) {
      toast.error(TOAST_MESSAGE.DO_NOT_EMPTY_ID, TOAST_OPTION);
      return false;
    }
    if (!password) {
      toast.error(TOAST_MESSAGE.DO_NOT_EMPTY_PASSWORD, TOAST_OPTION);
      return false;
    }

    const response = await localLogin(email, password);
    if (response?.status === 200) {
      toast.success(TOAST_MESSAGE.LOGIN_SUCCESS, TOAST_OPTION);
      navigate('/');
    }
    return true;
  };

  return (
    <Container>
      <form className="login_form auth-form" onSubmit={handleSubmit}>
        <h3 className="title">로그인</h3>
        <label htmlFor="email" className="label">
          이메일
        </label>
        <Input type="text" id="email" name="email" cy="login-id-input" />
        <label htmlFor="password" className="label">
          비밀번호
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          cy="login-pwd-input"
        />
        <div className="btn-wrapper">
          <div className="signin-wrapper">
            <Link to="/confirm-password">비밀번호 재설정 하기</Link>
            <Link to="/signup" data-cy="move-sign-up-btn">
              회원가입
            </Link>
          </div>
          <button
            type="submit"
            className="login-btn button"
            data-cy="login-submit"
          >
            로그인
          </button>
        </div>
        <span className="hr-login">또는</span>
        <Link to={`${KAKAO_OAUTH_URL}`}>
          <button
            type="button"
            className="kakao-login-btn"
            alt="카카오톡 로그인"
          />
        </Link>
      </form>
    </Container>
  );
}

export default LogIn;
