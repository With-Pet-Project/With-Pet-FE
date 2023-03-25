import { useRef, useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestConfirm, checkConfirm } from 'lib/APIs/profile';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Input from '../common/Input/Input';
import Container from '../common/Container/Container';
import '../common/auth.scss';
import './ConfirmPassword.scss';

function ConfirmPassword(): ReactElement {
  const navigate = useNavigate();
  const [isSentEmail, setIsSentEmail] = useState<boolean>(false);
  const emailRef = useRef(null);
  const codeRef = useRef(null);

  const handleVerifyCode = async () => {
    const verifyCode = codeRef.current.value;
    const email = emailRef.current.value;
    if (!verifyCode) {
      toast.error(TOAST_MESSAGE.DO_NOT_EMPTY_VERIFY_CODE, TOAST_OPTION);
      emailRef.current.focus();
      return;
    }

    const isVerify = await checkConfirm(email, verifyCode);
    if (isVerify)
      navigate({
        pathname: '/reset-password',
        search: `?id=${emailRef.current.value}`,
      });
    else {
      setIsSentEmail(false);
      emailRef.current.value = '';
      codeRef.current.value = '';
    }
  };

  const handleSendEmail = async () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error(TOAST_MESSAGE.DO_NOT_EMPTY_ID, TOAST_OPTION);
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
        <label
          htmlFor="email"
          className={`label ${isSentEmail && 'blur-label'}`}
        >
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
