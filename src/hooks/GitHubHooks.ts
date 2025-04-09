import { getRepos, getTotalContributions } from '@/lib/githupapi';
import { useQuery } from '@tanstack/react-query';

export function useGetRepos() {
  const {
    isLoading: loadingRepos,
    error,
    data: repos
  } = useQuery({
    queryKey: ['get-repos'],
    queryFn: getRepos
  });

  return { loadingRepos, error, repos };
}

export function useGetContributions() {
  const { isLoading: loadingContributions, error, data:contributions } = useQuery({
    queryKey: ['get-contributions'],
    queryFn: getTotalContributions
  });

  return { loadingContributions, error, contributions };
}
