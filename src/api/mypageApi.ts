import { clientapi }from '../lib/axios';
import { UserProfile } from '../types/types'


//userProfile type으로 정의
export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await clientapi.get('/user/mypage'); 
  return response.data;
};
