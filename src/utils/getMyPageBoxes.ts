// utils/getBoxContents.ts
import { BoxData } from '../types/types';

export const getMyPageBoxes = (user: any): BoxData[] => [
  {
    title: '기본 정보',
    contents: [
      { subtitle: '이름', body: user.name },
      { subtitle: '연락처', body: user.phone },
      { subtitle: '이메일', body: user.email ?? '미입력' }
    ]
  },
  {
    title: '소속 정보',
    contents: [
      { subtitle: '학교', body: user.univ },
      { subtitle: '단과대학', body: user.college },
      { subtitle: '학과', body: user.department },
      { subtitle: '전공', body: user.major },
      { subtitle: '학번', body: user.studentNumber},
      { subtitle: '학년', body: user.grade },
      { subtitle: '학적 상태', body: user.status },
      { subtitle: '역할', body: user.role },
    ]
  },
  {
    title: '인증 내역',
    contents: [
      { subtitle: '소속 인증하기', body:'' },
    ]
  },
  {
    title: '계정 정보',
    contents: [
      { subtitle: '비밀번호 변경', body: ' ' },
      { subtitle: '로그인 기기 관리', body: ' ' },
    ]
  }
];
