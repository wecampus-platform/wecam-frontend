import { useEffect, useState } from 'react';

export function useAutoComplete<T>(
  fetchFn: (query: string) => Promise<T[]>,
  disabled: boolean = false
) {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<T[]>([]);
  const [selected, setSelected] = useState<T | null>(null);
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOptions = async (query: string) => {
    if (disabled) return;
    setIsLoading(true);
    const data = await fetchFn(query);
    setOptions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (disabled || input.trim() === '') {
      setOptions([]);
      setShowList(false);
      return;
    }

    fetchOptions(input);
    setShowList(true);
  }, [input, disabled]);

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
    fetchOptions,
    isLoading,
  };
}
