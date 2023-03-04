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
  userTest: [],
  pet: [],
});

export const QUERY_KEY = {
  KakaoOAuth: 'kakaoOAuth',
  UserInfo: 'userInfo',
  PetInfoList: 'petInfoList',
  PetInfoById: 'petInfoById',
  DailyChallenge: 'dailyChallenge',
  WeeklyChallenge: 'weeklyChallenge',
  PetHealth: 'petHealth',
};
