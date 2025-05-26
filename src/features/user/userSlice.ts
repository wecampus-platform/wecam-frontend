//RTK : 로그인한 사용자 정보 전역 상태 관리
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

//setUser: 로그인 시 사용자 정보 상태 저장
//clearUser: 로그아웃 시 사용자 정보 초기화
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
