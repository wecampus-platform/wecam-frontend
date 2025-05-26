import React from 'react';
import { ContentItem } from '../../types/types';

type Props = {
  title: string;
  contents: ContentItem[];
  blurred?: boolean;
};

const Box = ({ title, contents, blurred = false }: Props) => (
  <div className="border rounded-lg overflow-hidden w-full shadow-sm mb-6 relative">
    <div className="bg-point text-white px-4 py-3 font-bold text-lg">{title}</div>

    {blurred && (
      <>
        <div className="absolute top-[48px] bottom-0 left-0 right-0 backdrop-blur-sm bg-white/50 z-10" />
        <div className="absolute top-[48px] bottom-0 left-0 right-0 flex items-center justify-center z-20">
          <p className="text-sm text-red-500 text-center font-medium">
            소속 인증이 필요합니다.
          </p>
        </div>
      </>
    )}

    {/* 콘텐츠 */}
    <div className={blurred ? 'pointer-events-none select-none' : ''}>
      {contents.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between px-4 py-3 border-t border-gray-200 bg-gray-50"
        >
          <div className="text-gray-700 font-medium whitespace-nowrap">{item.subtitle}</div>
          <div className="text-gray-600 text-right flex-1 break-words">{item.body}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Box;
