import React from 'react';
import { ContentItem } from '../../types/types';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  contents: ContentItem[];
  blurred?: boolean;
};

const MyPageBox = ({ title, contents, blurred = false }: Props) => (
  <div className="border rounded-lg overflow-hidden w-full shadow-sm mb-6 relative">
    {/* 박스 타이틀 */}
    <div className="bg-point text-white px-4 py-3 font-bold text-lg">{title}</div>

    {/* 흐림 처리 + 인증 문구 및 버튼 */}
    {blurred && (
      <>
        {/* 흐림 배경 레이어 */}
        <div className="absolute top-[48px] bottom-0 left-0 right-0 backdrop-blur-sm bg-white/50 z-0" />

        {/* 인증 안내 및 버튼 (앞단) */}
        <div className="absolute top-[48px] bottom-0 left-0 right-0 flex flex-col items-center justify-center z-10 space-y-2">
          <p className="text-sm text-center font-medium">
            소속 인증이 필요합니다.
          </p>
          <Link
            to="/auth/verify"
            className="bg-point text-white text-sm px-4 py-1.5 rounded transition"
          >
            소속 인증하러 가기
          </Link>
        </div>
      </>
    )}

    {/* 본문 콘텐츠 */}
    <div className={blurred ? 'pointer-events-none select-none' : ''}>
      {contents.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-start px-4 py-3 border-t border-gray-200 bg-gray-50"
        >
          <div className="text-gray-700 font-medium whitespace-nowrap">
            {item.subtitle}
          </div>
          <div className="text-gray-600 text-right flex-1 break-words">
            {item.body}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MyPageBox;
