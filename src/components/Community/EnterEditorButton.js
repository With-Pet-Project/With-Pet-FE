import styled from 'styled-components';
import FloatButton from 'components/common/FloatButton/FloatButton';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'components/auth/hooks/useUser';
import { toast } from 'react-toastify';

const FloatButtonWrapper = styled.div`
  position: sticky;
  top: 87%;
  right: 0;

  & svg {
    margin-top: 5px;
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

function EnterEditorButton() {
  const navigate = useNavigate();
  const user = useUser();

  const gotoEditor = () => {
    if (user) {
      navigate('/editor');
    } else {
      toast.warn('로그인 해주세요');
    }
  };

  return (
    <FloatButtonWrapper>
      <FloatButton handleOnClick={gotoEditor}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_429_360)">
            <path
              d="M0.440511 2.43943L2.43082 0.439141C3.01309 -0.146051 3.9659 -0.146051 4.54817 0.439141L6.63376 2.53519L2.5261 6.66345L0.440511 4.5674C-0.14176 3.98221 -0.14176 3.02462 0.440511 2.43943Z"
              fill="white"
            />
            <path
              d="M23.0719 19.0497L7.39625 3.31055L3.29395 7.43343L18.9246 23.1576C19.2091 23.4435 19.5834 23.624 19.9876 23.6692L23.0269 24.0002C23.6408 24.0604 24.06 23.624 23.9851 23.0071L23.5659 20.0579C23.506 19.6817 23.3414 19.3206 23.0719 19.0497Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_429_360">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </FloatButton>
    </FloatButtonWrapper>
  );
}

export default EnterEditorButton;
