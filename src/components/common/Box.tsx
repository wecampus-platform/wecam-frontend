import React from 'react';
import { ContentItem } from '../../types/types';

type Props = {
    title: string;
    contents: ContentItem[];
};

const Box = ({ title, contents }: Props) => (
    <div className="border rounded-lg overflow-hidden w-full max-w-md shadow-sm mb-6">
        <div className="bg-point text-white px-4 py-3 font-bold text-lg">{title}</div>
        {contents.map((item, idx) => (
            <div key={idx} className="flex justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
                <div className="text-gray-700 font-medium whitespace-nowrap">{item.subtitle}</div>
                <div className="text-gray-600 text-right flex-1 break-words">{item.body}</div>
            </div>
        ))}
    </div>
);

export default Box;
