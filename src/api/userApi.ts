import clientapi from '../lib/axios';
import { User } from '../types/types'


//user type으로 정의
export const getUser = async (): Promise<User> => {
  const response = await clientapi.get('/user/mypage'); 
  return response.data;
};
