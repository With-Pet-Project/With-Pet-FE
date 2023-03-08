/* eslint-disable consistent-return */
import styled from 'styled-components';
import { useRef, useState } from 'react';
import '../common/auth.scss';
import { useNavigate } from 'react-router-dom';
import { setSignup } from 'lib/APIs/signup';
import { isValidateNickName } from 'lib/APIs/profile';
import './SignUp.scss';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';

const CHECK_PASSWORD =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const CHECK_EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function SignUp() {
  const navigate = useNavigate();
  const passwordCheckRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const [validPwd, setValidPwd] = useState(null);
  const [validNickname, setValidNickname] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: nickname } = event.target.nickname;

    // 비밀번호와 비밀번호 확인과 일치하는지 검사
    if (validPwd) return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    console.log(email);
    console.log(password);
    console.log(nickname);

    // 이메일 유효성 검사
    if (!CHECK_EMAIL.test(email)) {
      alert('아이디는 이메일 형식이어야 합니다.');
      return false;
    }

    // 비밀번호 유효성 검사 (8글자 이상 문자 숫자 특수문자 포함)
    if (!CHECK_PASSWORD.test(password)) {
      alert('비밀번호는 8글자 이상의 문자, 숫자, 특수문자를 포함해야합니다.');
      return false;
    }

    // 닉네임 존재하는지 검사
    if (validPwd)
      return alert('이미 존재하는 닉네임입니다. 다시 입력해주세요.');

    // const response = await setSignup(email, password, nickname);

    // if (response?.status === 200) {
    //   alert('회원가입 되었습니다.');
    //   navigate('/login');
    // }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const isPasswordValid = () => {
    const { value: passwordValue } = passwordRef.current;
    const { value: passwordCheckValue } = passwordCheckRef.current;

    // 비번확인이랑 비번이랑 같은지 확인
    if (passwordValue === passwordCheckValue) return setValidPwd(true);
    if (passwordCheckValue) return setValidPwd(false);
  };

  const isNicknameValid = async () => {
    const { value } = nicknameRef.current;
    const isValid = await isValidateNickName(value);
    setValidNickname(isValid);
  };

  return (
    <Container>
      <form className="signup-form auth-form" onSubmit={handleSubmit}>
        <h3 className="title">회원가입</h3>
        <label htmlFor="email" className="label">
          아이디
        </label>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="이메일 형식으로 입력해주세요."
        />
        <label htmlFor="password" className="password">
          비밀번호
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="8자이상의 문자, 숫자, 특수문자를 입력해주세요."
          ref={passwordRef}
          onBlur={isPasswordValid}
        />
        <label htmlFor="password-check" className="label">
          비밀번호 확인
        </label>
        <Input
          type="password"
          id="password-check"
          name="password-check"
          ref={passwordCheckRef}
          onBlur={isPasswordValid}
        />
        {validPwd === false && (
          <span className="validate">비밀번호가 일치하지 않습니다.</span>
        )}
        <label htmlFor="nickname" className="label nickname-label">
          닉네임
        </label>
        <Input
          type="text"
          id="nickname"
          name="nickname"
          ref={nicknameRef}
          onBlur={isNicknameValid}
        />
        {validNickname === false && (
          <span className="validate">이미 존재하는 닉네임 입니다.</span>
        )}
        <div className="btn-wrapper">
          <button type="button" className=" button" onClick={handleCancel}>
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
