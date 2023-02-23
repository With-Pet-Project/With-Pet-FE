import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TOAST_OPTION, TOAST_MESSAGE } from 'components/common/Toast/toast';

export const queryErrorHandler = error => {
  toast.dismiss();
  toast.error(`${TOAST_MESSAGE.CANNOT_GET_DATA} ${error.message}`, {
    ...TOAST_OPTION,
    position: toast.POSITION.TOP_RIGHT,
  });
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
