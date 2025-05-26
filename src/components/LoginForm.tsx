import React, { useState } from 'react';


type Props = {
  
};

const LoginForm = ({}: Props) => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      //login 정보 보내기
      const res = await fetch('${process.env.REACT_APP_API_BASE_URL}/public/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      //실패시
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || '로그인 실패');
      }

      //성공시
      const data = await res.json();
      localStorage.setItem('token', data.token); // JWT 저장
      alert('로그인 성공!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="wecam@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-point text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;