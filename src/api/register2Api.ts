import React from 'react';
import { authapi } from '../lib/axios';
import { Duplicate, RegisterRequest } from '../types/types';

export const getDuplicate = async (
  type: 'email' | 'phone',
  value: string
): Promise<Duplicate> => {
  const response = await authapi.get(`/check/${type}`, {
    params: { [type]: value },
  });
  return response.data;
};

export const registerUser = async (data: RegisterRequest) => {
  const res = await authapi.post('/auth/register', data);
  return res.data;
};
