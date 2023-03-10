import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestConfirm, checkConfirm } from 'lib/APIs/profile';
import styled from 'styled-components';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';
import '../common/auth.scss';
import './ConfirmPassword.scss';

function ConfirmPassword() {
  const [isSentEmail, setIsSentEmail] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const codeRef = useRef(null);

  const handleVerifyCode = async () => {
    const verifyCode = codeRef.current.value;
    const email = emailRef.current.value;
    if (!verifyCode) {
      alert('인증코드를 입력하세요.');
      emailRef.current.focus();
      return;
    }

    const isVerify = await checkConfirm(email, verifyCode);
    console.log(isVerify);
    if (isVerify) navigate('/reset-password');
    else {
      setIsSentEmail(false);
      emailRef.current.value = '';
      codeRef.current.value = '';
    }
  };

  const handleSendEmail = async () => {
    const email = emailRef.current.value;
    if (!email) {
      alert('아이디를 입력하세요.');
      emailRef.current.focus();
      return;
    }
    const isEmailSent = await requestConfirm(email);
    setIsSentEmail(isEmailSent);
  };

  return (
    <Container>
      <form className="confirm-pwd-form auth-form">
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
            ref={emailRef}
            disabled={isSentEmail}
          />
          <button
            type="button"
            className="confirm-id-btn button"
            onClick={handleSendEmail}
            disabled={isSentEmail}
          >
            인증
          </button>
        </div>
        <VerifyDiv show={isSentEmail}>
          <label htmlFor="email" className="label">
            이메일로 전송된 인증 코드를 입력하세요.
          </label>
          <Input type="text" name="verify-Code" ref={codeRef} />
          <button
            type="button"
            className="confirm-password-btn button"
            onClick={handleVerifyCode}
          >
            확인
          </button>
        </VerifyDiv>
      </form>
    </Container>
  );
}

export default ConfirmPassword;

const VerifyDiv = styled.div`
  margin-top: 10px;
  opacity: ${props => (props.show ? '1' : '0')};
  height: ${props => (props.show ? 'auto' : '0')};
  transition: all 0.5s;
`;
