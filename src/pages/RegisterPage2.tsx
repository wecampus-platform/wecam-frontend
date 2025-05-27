import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm2 from '../components/Register/RegisterForm2';
import { RootState } from '../store';
import { registerUser } from '../api/register2Api';
import { RegisterRequest } from '../types/types';

const RegisterPage2 = () => {
  const register = useSelector((state: RootState) => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (form2Data: {
    email: string;
    password: string;
    name: string;
    phone: string;
  }) => {
    if (!register.school || !register.college || !register.department) {
      alert('소속 정보를 다시 선택해주세요.');
      return;
    }

    const data: RegisterRequest = {
      ...form2Data,
      schoolId: register.school.id,
      collegeId: register.college.id,
      departmentId: register.department.id,
    };

    try {
      await registerUser(data);
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (err) {
      alert('회원가입 중 문제가 발생했습니다.');
      console.error(err);
    }
  };

  return (
    <div className="register-page">
      <h2 className="text-center text-2xl font-bold my-4">Wecam</h2>
      <RegisterForm2 onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage2;
