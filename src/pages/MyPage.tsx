// pages/MyPage.tsx
import React from 'react';
import Box from '../components/common/Box'
import { getMyPageBoxes } from '../utils/getMyPageBoxes';

const mockUser = {
  name: '김나림',
  phone: '010-1234-5678',
  email: 'pusan@pusan.ac.kr',
  univ: '부산대학교',
  college: '정보의생명공학대학',
  department: '정보컴퓨터공학과',
  major: '컴퓨터공학전공',
  studentNumber: '2021XXXXX',
  grade: '4학년',
  status: '재학',
  role: '학생'
};

const MyPage = () => {
  const boxList = getMyPageBoxes(mockUser);

  return (
    <div className="p-6 space-y-6">
      {boxList.map((box, idx) => (
        <Box key={idx} title={box.title} contents={box.contents} />
      ))}
    </div>
  );
};

export default MyPage;
