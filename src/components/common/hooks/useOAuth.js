import { useQueryClient, useMutation } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { getKakaoUserLoginToken } from 'lib/APIs/login';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useOAuth() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate } = useMutation({
    mutationFn: code => getKakaoUserLoginToken(code),
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
    },
    onSetteled: (data, error, variables, context) => {
      console.log('onSettled');
    },
    onError: (error, variables, context) => {
      console.log('error: ', error);
    },
  });

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      console.log(code);
      mutate(code);
    }
  }, [searchParams, setSearchParams, mutate]);
}
