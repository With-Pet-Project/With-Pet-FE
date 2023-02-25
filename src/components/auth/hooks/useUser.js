/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from 'lib/APIs/login';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function useUser() {
  const jwt_token = localStorage.getItem('jwt_token') || null;

  const { data: userInfo } = useQuery({
    queryKey: [QUERY_KEY.UserInfo, jwt_token],
    queryFn: () => getUserInfo(jwt_token),
    onError: () => {
      toast.error(TOAST_OPTION, TOAST_MESSAGE.CANNOT_GET_DATA);
    },
    enabled: !!jwt_token,
  });

  return userInfo?.data?.data;
}
