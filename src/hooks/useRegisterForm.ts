// hooks/useRegisterForm.ts
import { useEffect, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/;

export function useRegisterForm() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const isPasswordValid = passwordRegex.test(password);
  const isPasswordMatch = password === confirmPassword;
  const isPhoneValid = /^\d{10,11}$/.test(phone);

  const isFormValid =
    email &&
    isEmailValid &&
    password &&
    isPasswordValid &&
    confirmPassword &&
    isPasswordMatch &&
    name &&
    phone &&
    isPhoneValid;

  return {
    email,
    setEmail,
    isEmailValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
    setConfirmPassword,
    isPasswordMatch,
    name,
    setName,
    phone,
    setPhone,
    isPhoneValid,
    isFormValid,
  };
}
