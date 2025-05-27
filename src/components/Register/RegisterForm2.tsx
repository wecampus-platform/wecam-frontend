// RegisterForm2.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { useRegisterForm } from '../../hooks/useRegisterForm';

interface RegisterForm2Props {
    onSubmit: (data: {
        email: string;
        password: string;
        name: string;
        phone: string;
    }) => void;
}

const RegisterForm2 = ({ onSubmit }: RegisterForm2Props) => {
    const register = useSelector((state: RootState) => state.register);
    const {
        email, setEmail, isEmailValid, emailCodeInputEnabled,
        password, setPassword, isPasswordValid,
        confirmPassword, setConfirmPassword, isPasswordMatch,
        name, setName,
        phone, setPhone, isPhoneValid, phoneCodeInputEnabled,
        isFormValid,
        emailMessage, handleCheckEmail, checkingEmail,
        phoneMessage, handleCheckPhone, checkingPhone,
    } = useRegisterForm();



    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!isFormValid) return;
            onSubmit({ email, password, name, phone });
        }} className="max-w-md mx-auto space-y-6">
            {/* 소속 정보 */}
            <div className="block mb-1">
                <input
                    type="text"
                    value={`${register.school?.name ?? ''} ${register.college?.name ?? ''} ${register.department?.name ?? ''}`}
                    className="input-common bg-gray-100 cursor-not-allowed"
                    readOnly
                />
            </div>

            {/* 이메일 */}
            <div>
                <label className="block mb-1">이메일</label>
                <div className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="input-common flex-1"
                    />
                    <button
                        type="button"
                        onClick={handleCheckEmail}
                        disabled={checkingEmail || !isEmailValid}
                        className="button-common"
                    >
                        이메일 인증하기
                    </button>
                </div>
                {email && !isEmailValid && (
                    <p className="text-red-500 text-sm mt-1">※ 이메일 형식이 올바르지 않습니다.</p>
                )}
                {emailMessage && (
                    <p className={`text-sm mt-1 ${emailMessage.includes('인증코드') ? 'text-green-600' : 'text-red-500'}`}>
                        {emailMessage}
                    </p>
                )}
            </div>

            {/* 인증코드 */}
            <div>
                <label className="block mb-1">인증코드</label>
                <div className="flex gap-2">
                    <input type="text" disabled={!emailCodeInputEnabled} className="input-common flex-1" />
                    <button type="button" disabled={!emailCodeInputEnabled} className="button-common">인증코드 확인</button>
                </div>
            </div>

            {/* 비밀번호 */}
            <div>
                <label className="block mb-1">비밀번호</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-common"
                />
                {!isPasswordValid && password && (
                    <p className="text-red-500 text-sm mt-1">※ 영문/숫자/특수문자 모두 포함 8~20자</p>
                )}
            </div>

            {/* 비밀번호 확인 */}
            <div>
                <label className="block mb-1">비밀번호 확인</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-common"
                />
                {!isPasswordMatch && confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">※ 비밀번호가 일치하지 않습니다.</p>
                )}
            </div>

            {/* 이름 */}
            <div>
                <label className="block mb-1">이름</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-common"
                />
            </div>

            {/* 전화번호 */}
            <div>
                <label className="block mb-1">전화번호</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value.replace(/[^0-9]/g, ''));
                        }}
                        className="input-common flex-1"
                    />
                    <button
                        type="button"
                        onClick={handleCheckPhone}
                        disabled={checkingPhone || !isPhoneValid}
                        className="button-common"
                    >
                        본인인증하기
                    </button>
                </div>
                {phoneMessage && (
                    <p className={`text-sm mt-1 ${phoneMessage.includes('인증번호') ? 'text-green-600' : 'text-red-500'}`}>
                        {phoneMessage}
                    </p>
                )}
            </div>

            {/* 휴대폰 인증코드 */}
            <div>
                <label className="block mb-1">인증번호</label>
                <div className="flex gap-2">
                    <input type="text" disabled={!phoneCodeInputEnabled} className="input-common flex-1" maxLength={6} />
                    <button type="button" disabled={!phoneCodeInputEnabled} className="button-common">인증번호 확인</button>
                </div>
            </div>

            {/* 회원가입 완료 버튼 */}
            <button
                type="submit"
                className="button-common button-black w-full disabled:opacity-50"
                disabled={!isFormValid}
            >
                회원가입완료하기
            </button>
        </form>
    );
};

export default RegisterForm2;