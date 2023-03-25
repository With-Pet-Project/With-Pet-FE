import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/', { replace: true });
    window.location.reload();
  };

  return { logout };
}
