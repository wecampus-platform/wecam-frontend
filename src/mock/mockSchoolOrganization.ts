import { School, Organization } from '../types/types';

export const mockSchools: School[] = [
  { id: 1, name: '부산대학교' },
  { id: 2, name: '경북대학교' },
];

export const mockColleges: Record<number, Organization[]> = {
  1: [
    { id: 11, name: '공과대학', level: 1 },
    { id: 12, name: '인문대학', level: 1 },
  ],
  2: [
    { id: 21, name: '의과대학', level: 1 },
    { id: 22, name: '자연과학대학', level: 1 },
  ],
};

export const mockDepartments: Record<number, Organization[]> = {
  11: [
    { id: 111, name: '컴퓨터공학부', level: 2 },
    { id: 112, name: '전기전자공학부', level: 2 },
  ],
  12: [
    { id: 121, name: '국어국문학과', level: 2 },
    { id: 122, name: '영어영문학과', level: 2 },
  ],
};
