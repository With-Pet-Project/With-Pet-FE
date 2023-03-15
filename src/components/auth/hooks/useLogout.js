import { useNavigate } from 'react-router-dom';

// 추후에 API연동 예정. 우선은 localstorage삭제만 구현.
export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/', { replace: true });
    // window.location.reload();
  };

  return { logout };
}
