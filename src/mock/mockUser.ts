import { UserProfile } from '../types/types'; 

export const mockUser: UserProfile = {
  username: '홍길동',
  phoneNumber: '010-1234-5678',
  userEmail: 'hong@example.com',
  universityId: 1,
  organizationId: 101,
  academicStatus: '재학',
  role: 'GUEST_STUDENT',
  studentGrade: 3,
  isAuthentication: true,
  isCouncilFee: false,
  nickName: '길동이',
  studentId: '202011111',
  organizationHierarchyList: ['부산대학교', '공과대학', '컴퓨터공학과'],
};
