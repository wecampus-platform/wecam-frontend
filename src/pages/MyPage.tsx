import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import Box from '../components/Mypage/MyPageBox';
import MyPageCard from '../components/Mypage/MyPageCard';
import { getMyPageBoxes } from '../utils/getMyPageBoxes';
import { mockUser } from '../mock/mockUser';
import { useGetUserProfile } from '../hooks/useUserQuery';
import { UserProfile } from '../types/types';


const isMockMode = process.env.REACT_APP_USE_MOCK === 'true';

const MyPage = () => {
  const { data: user, isLoading, error } = useGetUserProfile();
  const finalUser = isMockMode ? mockUser : user;

  if (!finalUser) return <div>사용자 정보가 없습니다.</div>;
  if (!isMockMode && isLoading) return <div>로딩중...</div>;
  if (!isMockMode && error) return <div>에러가 발생했습니다.</div>;

  const authLinks = getAuthLinks(finalUser.role, finalUser.isAuthentication);
  const boxList = getMyPageBoxes(finalUser, authLinks);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="w-full lg:w-1/3">
        <MyPageCard user={finalUser} />
      </div>

      <div className="w-full lg:w-2/3 space-y-6">
        {boxList.map((box, idx) => (
          <Box
            key={idx}
            title={box.title}
            contents={box.contents}
            blurred={
              box.title === '소속 정보' && !finalUser.isAuthentication
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyPage;

const getAuthLinks = (role: string, isAuth: boolean): { [key: string]: ReactNode } => {
  const link = (text: string, to: string) => (
    <Link to={to} className="text-point underline">{text}</Link>
  );

  // 1. UNAUTH + isAuth = false
  if (role === 'UNAUTH' && !isAuth) {
    return {
      organization: link('인증하기', '/auth/org'),
      schoolEmail: link('인증하기', '/auth/email'),
      studentCouncil: link('인증하기', '/auth/council'),
    };
  }

  // 2. GUEST_STUDENT + isAuth = true
  if (role === 'GUEST_STUDENT' && isAuth) {
    return {
      organization: <span className="text-point font-semibold">임시완료</span>,
      schoolEmail: link('인증하기', '/auth/email'),
      studentCouncil: link('인증하기', '/auth/council'),
    };
  }

  // 3. STUDENT + isAuth = true
  if (role === 'STUDENT' && isAuth) {
    return {
      organization: <span className="text-point font-semibold">인증완료</span>,
      schoolEmail: <span className="text-point font-semibold">인증완료</span>,
      studentCouncil: <span className="text-point font-semibold">인증완료</span>,
    };
  }

  // fallback
  return {
    organization: <span className="text-gray-400">정보 없음</span>,
    schoolEmail: <span className="text-gray-400">정보 없음</span>,
    studentCouncil: <span className="text-gray-400">정보 없음</span>,
  };
};

