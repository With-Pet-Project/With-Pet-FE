import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { getAllOfChallenges } from 'lib/APIs/challenge';

export const useChallenge = () => {
  const { challenge } = queryKeys;

  const {
    error,
    isError,
    isLoading,
    data: challenges,
  } = useQuery({
    queryKey: [challenge.key],
    queryFn: getAllOfChallenges,
  });

  return { error, isError, isLoading, challenges };
};
