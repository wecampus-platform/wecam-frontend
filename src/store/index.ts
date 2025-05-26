import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import registerReducer from '../features/register/registerSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
