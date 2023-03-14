/* eslint-disable consistent-return */
import '../common/auth.scss';
import './ResetPassword.scss';
import { useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from 'lib/constants/errorMessage';
import { TOAST_OPTION } from 'components/common/Toast/toast';
import Container from '../common/Container/Container';
import Input from '../common/Input/Input';
import useUpdatePassword from '../hooks/useUpdatePassword';

const CHECK_PASSWORD =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const email = searchParams.get('id');
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const updatePassword = useUpdatePassword();
  const { VALIDATION } = ERROR_MESSAGE;
  const [validPwd, setValidPwd] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const { value: password } = passwordRef.current;

    if (!CHECK_PASSWORD.test(password)) {
      toast.error(VALIDATION.MALFUNCTION_PWD, TOAST_OPTION);
      return false;
    }

    updatePassword({ password, email });
    // alert('변경되었습니다. 로그인하세요');
    // navigate('/login');
    return true;
  };

  const isPasswordValid = () => {
    const { value: passwordValue } = passwordRef.current;
    const { value: passwordCheckValue } = passwordCheckRef.current;
    if (passwordValue === passwordCheckValue) return setValidPwd(true);
    if (passwordCheckValue) return setValidPwd(false);
  };

  return (
    <Container>
      <form className="reset-password-form auth-form" onSubmit={handleSubmit}>
        <h3 className="title">비밀번호 재설정</h3>
        <label htmlFor="password" className="label">
          새 비밀번호
        </label>
        <Input
          type="text"
          id="password"
          name="password"
          isRequired={true}
          ref={passwordRef}
          onChange={isPasswordValid}
        />
        <label htmlFor="password-check" className="label">
          새 비밀번호 확인
        </label>
        <Input
          type="text"
          id="password-check"
          name="password-check"
          isRequired={true}
          ref={passwordCheckRef}
          onChange={isPasswordValid}
        />
        {validPwd === false && (
          <span className="validate">비밀번호가 일치하지 않습니다.</span>
        )}
        <p>8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다.</p>
        <button type="submit" className="button reset-btn">
          재설정
        </button>
      </form>
    </Container>
  );
}
export default ResetPassword;
