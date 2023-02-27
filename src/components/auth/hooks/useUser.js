/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from 'lib/APIs/login';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { useNavigate } from 'react-router-dom';
import { useLogout } from './useLogout';

export function useUser() {
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('jwt_token') || null;
  const { logout } = useLogout();

  const { data: userInfo } = useQuery({
    queryKey: [QUERY_KEY.UserInfo, jwt_token],
    queryFn: () => getUserInfo(jwt_token),
    onError: () => {
      toast.error(TOAST_MESSAGE.LOGIN_FAIL, TOAST_OPTION);
      logout();
      navigate('/', { replace: true });
    },
    enabled: !!jwt_token,
  });

  return userInfo?.data?.data;
}