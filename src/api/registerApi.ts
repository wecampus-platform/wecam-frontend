import { School, Organization } from '../types/types';
import { mockSchools, mockColleges, mockDepartments } from '../mock/mockSchoolOrganization';
import { publicapi } from '../lib/axios';

const isMockMode = process.env.REACT_APP_USE_MOCK === 'true';

export const searchSchools = async (keyword: string): Promise<School[]> => {
  if (isMockMode) {
    return new Promise((resolve) =>
      setTimeout(() => {
        const result = mockSchools.filter((s) =>
          s.name.includes(keyword)
        );
        resolve(result);
      }, 200)
    );
  }

  const res = await publicapi.get<School[]>('/schools');
  return res.data.filter((s) => s.name.includes(keyword));
};

export const searchColleges = async (schoolId: number, keyword: string, level: number): Promise<Organization[]> => {
  if (isMockMode) {
    return new Promise((resolve) =>
      setTimeout(() => {
        const result = (mockColleges[schoolId] || []).filter((c) =>
          c.name.includes(keyword)
        );
        resolve(result);
      }, 200)
    );
  }

  const res = await publicapi.get<Organization[]>(
    `/schools/${schoolId}/organizations`,
    {
      params: { level } 
    }
  );  return res.data.filter((c) => c.name.includes(keyword));
};

export const searchDepartments = async (collegeId: number, keyword: string, level: number): Promise<Organization[]> => {
  if (isMockMode) {
    return new Promise((resolve) =>
      setTimeout(() => {
        const result = (mockDepartments[collegeId] || []).filter((d) =>
          d.name.includes(keyword)
        );
        resolve(result);
      }, 200)
    );
  }

  const res = await publicapi.get<Organization[]>(
    `/organizations/${collegeId}/children`,
    {
      params: { level }
    }
  );  return res.data.filter((d) => d.name.includes(keyword));
};
