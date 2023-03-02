/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query';
import { getKakaoUserLoginToken } from 'lib/APIs/login';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';
import { toast } from 'react-toastify';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';

export function useOAuth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { data: kakaoData } = useQuery({
    queryKey: [QUERY_KEY.KakaoOAuth, code],
    queryFn: () => getKakaoUserLoginToken(code),
    onError: () => toast.error(TOAST_MESSAGE.LOGIN_FAIL, TOAST_OPTION),
    refetchOnWindowFocus: false,
  });

  const jwt_token = kakaoData?.data.data.token;

  if (jwt_token) {
    localStorage.setItem('jwt_token', jwt_token);
  }

  return jwt_token;
}
