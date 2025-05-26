// src/store/registerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { School, Organization } from '../../types/types';

interface RegisterState {
  school: School | null;
  college: Organization | null;
  department: Organization | null;
}

const initialState: RegisterState = {
  school: null,
  college: null,
  department: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterInfo: (
      state,
      action: PayloadAction<{
        school: School;
        college: Organization;
        department: Organization;
      }>
    ) => {
      state.school = action.payload.school;
      state.college = action.payload.college;
      state.department = action.payload.department;
    },
    resetRegisterInfo: (state) => {
      state.school = null;
      state.college = null;
      state.department = null;
    },
  },
});

export const { setRegisterInfo, resetRegisterInfo } = registerSlice.actions;
export default registerSlice.reducer;
