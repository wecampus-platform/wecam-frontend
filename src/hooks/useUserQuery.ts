//react query 사용으로 서버에서 자주 요청되는 정보 가져오기
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../api/mypageApi';
import { UserProfile } from '../types/types';

//mypage 정보를 가져옴. 
//5분 동안은 재요청하지 않음.
export function useGetUserProfile() {
  return useQuery<UserProfile>({
    queryKey: ['user'],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//학교,학과 정보..?
