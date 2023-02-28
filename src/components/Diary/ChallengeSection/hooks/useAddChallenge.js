import { useMutation } from '@tanstack/react-query';
import { QUERY_KEY } from 'lib/reactQuery/queryKeys';
import { postAddChallenge } from 'lib/APIs/challenge';
import { useSearchParams } from 'react-router-dom';

export function useAddChallenge() {
  const jwt_token = localStorage.getItem('jwt_token') || null;

  const { mutate } = useMutation({
    mutationFn: (jwt, petId, title, targetCnt = 1) =>
      postAddChallenge(jwt, petId, title, targetCnt),
  });
}
