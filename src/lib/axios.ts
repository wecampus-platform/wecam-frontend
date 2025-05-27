import { createAxiosInstance } from './createAxiosInstance';

// client용 인스턴스
export const clientapi = createAxiosInstance('/client', () =>
  localStorage.getItem('accessToken')
);

// public용 인스턴스
export const publicapi = createAxiosInstance('/public');

//email check용 인스턴스
export const authapi = createAxiosInstance('/auth');