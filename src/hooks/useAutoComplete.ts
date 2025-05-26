import { useEffect, useState } from 'react';

export function useAutoComplete<T>(
  fetchFn: (query: string) => Promise<T[]>,
  disabled: boolean = false
) {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<T[]>([]);
  const [selected, setSelected] = useState<T | null>(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (disabled || input.trim() === '') return;
    fetchFn(input).then(setOptions);
  }, [input, disabled, fetchFn]);

  const handleSelect = (item: T) => {
    setSelected(item);
    setInput((item as any).name);
    setShowList(false);
  };

  return {
    input,
    setInput,
    options,
    selected,
    setSelected,
    showList,
    setShowList,
    handleSelect,
    disabled,
  };
}