import React from 'react';

interface AutoCompleteInputProps<T> {
  label: string;
  input: string;
  setInput: (v: string) => void;
  options: T[];
  selected: T | null;
  handleSelect: (item: T) => void;
  showList: boolean;
  setShowList: (v: boolean) => void;
  disabled: boolean;
}

function AutoCompleteInput<T extends { id: number; name: string }>({
  label,
  input,
  setInput,
  options,
  handleSelect,
  showList,
  setShowList,
  disabled,
}: AutoCompleteInputProps<T>) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={`${label}을 입력하세요`}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setShowList(true);
        }}
        onFocus={() => setShowList(true)}
        onBlur={() => setTimeout(() => setShowList(false), 100)}
        disabled={disabled}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-point"
      />
      {showList && options.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-md w-full mt-1 max-h-48 overflow-y-auto">
          {options.map((item) => (
            <li
              key={item.id}
              className="px-3 py-2 hover:bg-point cursor-pointer"
              onMouseDown={() => handleSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoCompleteInput;
