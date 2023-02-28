/* eslint-disable jsx-a11y/anchor-is-valid */
import '../common/auth.scss';
import './LogIn.scss';
import { Link } from 'react-router-dom';
import { KAKAO_OAUTH_URL } from 'lib/KakaoAPIs/client';

import Container from '../common/Container/Container';
import Input from '../common/Input/Input';

function LogIn() {
  return (
    <Container>
      <form className="login_form auth-form">
        <h3 className="title">로그인</h3>
        <label htmlFor="email" className="label">
          이메일
        </label>
        <Input type="text" id="email" name="email" />
        <label htmlFor="password" className="label">
          비밀번호
        </label>
        <Input type="password" id="password" />
        <div className="btn-wrapper">
          <div className="signin-wrapper">
            <Link to="/confirm-password">비밀번호 재설정 하기</Link>
            <Link to="/signup">회원가입</Link>
          </div>
          <button type="submit" className="login-btn button">
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
