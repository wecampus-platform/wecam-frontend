export type ContentItem = {
  subtitle: string;
  body: string | React.ReactNode;
};

export type BoxData = {
  title: string;
  contents: ContentItem[];
};

export interface User {
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
