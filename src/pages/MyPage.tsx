import React, { useEffect } from 'react';
import Box from '../components/common/MyPageBox';
import MyPageCard from '../components/MyPageCard';
import { getMyPageBoxes } from '../utils/getMyPageBoxes';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser } from '../features/user/userSlice';
import { mockUser } from '../mock/mockUser';
import { useGetUser } from '../hooks/useUserQuery';

const isMockMode = process.env.REACT_APP_USE_MOCK === 'true';

const MyPage = () => {
  const dispatch = useAppDispatch();
  const storedUser = useAppSelector((state) => state.user.user);

  const { data: user, isLoading, error } = useGetUser();

  useEffect(() => {
    if (isMockMode) {
      dispatch(setUser(mockUser));
    } else if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch, user]);

  if (!storedUser) return <div>사용자 정보가 없습니다.</div>;
  if (!isMockMode && isLoading) return <div>로딩중...</div>;
  if (!isMockMode && error) return <div>에러가 발생했습니다.</div>;

  const boxList = getMyPageBoxes(storedUser);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="w-full lg:w-1/3">
        <MyPageCard user={storedUser} />
      </div>

      <div className="w-full lg:w-2/3 space-y-6">
        {boxList.map((box, idx) => (
          <Box
            key={idx}
            title={box.title}
            contents={box.contents}
            blurred={
              box.title === '소속 정보' && storedUser.isAuthentication === false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyPage;
