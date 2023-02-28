import './ConfirmPassword.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';

function ConfirmPassword() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    // 확인되었는지 처리
    event.preventDefault();
    navigate('/reset-password');
  };

  return (
    <div className="confirmPassword-container">
      <div className="background confirmPassword_wrapper">
        <div className="form_wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h3>비밀번호 재설정</h3>
            <label htmlFor="email">
              비밀번호를 찾고자하는 아이디를 입력하세요.
            </label>
            <Input type="text" id="email" name="email" />
            <div className="btn-wrapper">
              <p>입력한 이메일에서 인증을 진행한 뒤 확인버튼을 눌러주세요.</p>
              <button type="submit" className="confirm-password-btn">
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPassword;
