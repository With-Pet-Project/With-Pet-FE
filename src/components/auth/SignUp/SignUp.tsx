/* eslint-disable react/jsx-boolean-value */
/* eslint-disable consistent-return */
import { useRef, useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE } from 'lib/constants/errorMessage';
import { signup } from 'lib/APIs/signup';
import { isValidateNickName } from 'lib/APIs/profile';
import { toast } from 'react-toastify';
import { TOAST_OPTION } from 'components/common/Toast/toast';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';
import { CHECK_PASSWORD, CHECK_EMAIL } from '../constant';
import '../common/auth.scss';
import './SignUp.scss';

function SignUp(): ReactElement {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const [validPwd, setValidPwd] = useState(null);
  const [validNickname, setValidNickname] = useState(null);
  const { VALIDATION } = ERROR_MESSAGE;

  const validateValues = (): boolean => {
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    // 이메일 유효성 검사
    if (!CHECK_EMAIL.test(email)) {
      toast.error(VALIDATION.MALFUNCTION_ID, TOAST_OPTION);
      return false;
    }

    // 비밀번호와 비밀번호 확인과 일치하는지 검사
    if (!validPwd) {
      toast.error(VALIDATION.NOT_CORRECT_PASSWORD, TOAST_OPTION);
      return false;
    }

    // 비밀번호 유효성 검사 (8글자 이상 문자 숫자 특수문자 포함)
    if (!CHECK_PASSWORD.test(password)) {
      toast.error(VALIDATION.MALFUNCTION_PWD, TOAST_OPTION);
      return false;
    }

    // 닉네임 존재하는지 검사
    if (!validNickname) {
      toast.error(VALIDATION.NICKNAME_EXIST, TOAST_OPTION);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateValues();
    if (!isValid) return;

    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;
    const { value: nickname } = nicknameRef.current;

    const response = await signup(email, password, nickname);
    if (response?.status === 200) {
      alert('회원가입 되었습니다.');
      navigate('/login');
    }
  };

  const handleCancel = (): void => {
    navigate('/login');
  };

  const isPasswordValid = (): void => {
    const { value: passwordValue } = passwordRef.current;
    const { value: passwordCheckValue } = passwordCheckRef.current;
    if (passwordValue === passwordCheckValue) return setValidPwd(true);
    if (passwordCheckValue) return setValidPwd(false);
  };

  const isNicknameValid = async () => {
    const { value } = nicknameRef.current;
    if (!value) return;
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
          ref={emailRef}
          placeholder="이메일 형식으로 입력해주세요."
          isRequired={true}
          cy="sign-up-id"
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
          isRequired={true}
          onChange={isPasswordValid}
          cy="sign-up-pwd"
        />
        <label htmlFor="password-check" className="label">
          비밀번호 확인
        </label>
        <Input
          type="password"
          id="password-check"
          name="password-check"
          isRequired={true}
          ref={passwordCheckRef}
          onChange={isPasswordValid}
          cy="sign-up-pwd-check"
        />
        {validPwd === false && (
          <span className="validate" data-cy="pwd-check-fail">
            비밀번호가 일치하지 않습니다.
          </span>
        )}
        <label htmlFor="nickname" className="label nickname-label">
          닉네임
        </label>
        <Input
          type="text"
          id="nickname"
          name="nickname"
          ref={nicknameRef}
          isRequired={true}
          onBlur={isNicknameValid}
          cy="sign-up-nickname"
        />
        {validNickname === false && (
          <span className="validate" data-cy="nickname-check-fail">
            이미 존재하는 닉네임 입니다.
          </span>
        )}
        <div className="btn-wrapper">
          <button type="button" className=" button" onClick={handleCancel}>
            취소
          </button>
          <button
            type="submit"
            className="signup-btn button"
            data-cy="sign-up-submit"
          >
            확인
          </button>
        </div>
      </form>
    </Container>
  );
}

export default SignUp;
