import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import MyPage from './pages/MyPage';
import Common from './layout/CommonLayout';
import Main from './pages/Main';
import RegisterPage1 from './pages/RegisterPage1';
import RegisterPage2 from './pages/RegisterPage2';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Common />}>
          {/* 로그인 필요 없는 라우트 */}
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/1" element={<RegisterPage1 />} />
          <Route path="/register/2" element={<RegisterPage2 />} />
          <Route path="/mypage" element={<MyPage />} />

          {/* 로그인이 필요한 라우트 묶음 */}
          <Route element={<RequireAuth />}>
            
            {/* 필요한 라우트 계속 추가 */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
