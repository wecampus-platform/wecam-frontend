// RegisterForm2.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { useRegisterForm } from '../../hooks/useRegisterForm';

const RegisterForm2 = () => {
    const register = useSelector((state: RootState) => state.register);
    const {
        email, setEmail, isEmailValid,
        password, setPassword, isPasswordValid,
        confirmPassword, setConfirmPassword, isPasswordMatch,
        name, setName,
        phone, setPhone, isPhoneValid,
        isFormValid
    } = useRegisterForm();

    return (
        <form className="max-w-md mx-auto space-y-6">
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
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-common flex-1"
                    />
                    <button type="button" className="button-common button-point-outline">이메일 인증하기</button>
                </div>
                {!isEmailValid && email && (
                    <p className="text-red-500 text-sm mt-1">※ 이메일 형식이 올바르지 않습니다.</p>
                )}
            </div>

            {/* 인증코드 */}
            <div>
                <label className="block mb-1">인증코드</label>
                <div className="flex gap-2">
                    <input type="text" className="input-common flex-1" />
                    <button type="button" className="button-common button-point-outline">인증코드 확인</button>
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
                        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                        className="input-common flex-1"
                    />
                    <button type="button" className="button-common button-point-outline">본인인증하기</button>
                </div>
                {!isPhoneValid && phone && (
                    <p className="text-red-500 text-sm mt-1">※ 올바른 전화번호를 입력하세요.</p>
                )}
            </div>

            {/* 휴대폰 인증코드 */}
            <div>
                <label className="block mb-1">인증번호</label>
                <div className="flex gap-2">
                    <input type="text" className="input-common flex-1" maxLength={6} />
                    <button type="button" className="button-common button-point-outline">인증번호 확인</button>
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