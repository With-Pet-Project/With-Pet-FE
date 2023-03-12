import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { getReadReplies } from 'lib/APIs/comment';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE, TOAST_OPTION } from 'components/common/Toast/toast';

export function useReply(commentId) {
  const { Reply } = QUERY_KEY;

  const { data } = useQuery({
    queryKey: [Reply, commentId],
    queryFn: () => getReadReplies(commentId),
    onError: () => {
      toast.error(TOAST_MESSAGE.CANNOT_GET_DATA, TOAST_OPTION);
    },
  });

  const replyList = data?.data?.data;

  return replyList;
}
