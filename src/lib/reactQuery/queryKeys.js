// https://tanstack.com/query/v4/docs/react/community/lukemorales-query-key-factory
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  healthcare: null,
  account: [],
  article: [],
});

export const QUERY_KEY = {
  KakaoOAuth: 'kakaoOAuth',
  LocalLogin: 'localLogin',
  UserInfo: 'userInfo',
  PetInfoList: 'petInfoList',
  PetInfoById: 'petInfoById',
  DailyChallenge: 'dailyChallenge',
  WeeklyChallenge: 'weeklyChallenge',
  PetHealth: 'petHealth',
  Article: 'article',
  Diary: 'diary',
  Reply: 'reply',
};
