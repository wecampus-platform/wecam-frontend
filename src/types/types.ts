export type ContentItem = {
  subtitle: string;
  body: string | React.ReactNode;
};

export type BoxData = {
  title: string;
  contents: ContentItem[];
};

export interface User {
  email: string;
  role: 'UNAUTH' | 'GEUST_STUDENT' | 'GUEST'; 
  accessToken: string;
  refreshToken: string;
}

export interface UserProfile {
  username: string;
  phoneNumber: string;
  userEmail: string;
  universityId: number;
  organizationId: number;
  academicStatus: string;
  role: string;
  studentGrade: number;
  isAuthentication: boolean;
  isCouncilFee: boolean;
  nickName: string;
  studentId: string;
  organizationHierarchyList: string[];
}
