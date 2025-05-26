import RegisterForm from '../components/Register/RegisterForm1'
import { useDispatch } from 'react-redux';
import { setRegisterInfo } from '../features/register/registerSlice';
import { useNavigate } from 'react-router-dom';

const RegisterPage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    dispatch(setRegisterInfo(data)); // 저장
    navigate('/register/2');     // 이동
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        <RegisterForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default RegisterPage1;
