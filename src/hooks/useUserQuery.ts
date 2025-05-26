//react query 사용으로 서버에서 유저 정보 가져오기
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/userApi';
import { User } from '../types/types';

//user 정보를 가져옴.
//5분 동안은 재요청하지 않음.
export function useGetUser() {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

