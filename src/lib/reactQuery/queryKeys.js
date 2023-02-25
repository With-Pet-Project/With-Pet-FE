// https://tanstack.com/query/v4/docs/react/community/lukemorales-query-key-factory
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  healthcare: null,
  account: [],
  challenge: {
    key: key => ({ key }),
    id: id => ({ id }),
  },
  article: [],
  oauth: code => ({ code }),
  user: jwt => ({ jwt }),
});

export const QUERY_KEY = {
  KakaoOAuth: 'kakaoOAuth',
  UserInfo: 'userInfo',
};
