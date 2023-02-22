import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryErrorHandler = error => {
  toast.dismiss();
  toast.error(`데이터를 가져오지 못했습니다! ${error.message}`);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      retry: 0,
      suspense: true,
    },
  },
});
