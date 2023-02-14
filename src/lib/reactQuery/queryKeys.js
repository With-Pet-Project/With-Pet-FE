// https://tanstack.com/query/v4/docs/react/community/lukemorales-query-key-factory
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  healthcare: null,
  account: [],
  challenge: {
    key: key => ({ key }),
    id: id => ({ id }),
  },
  article: {
    filter: (tag, city, filter) => ({ tag, city, filter }),
  },
});
