import { createContext } from 'react';

interface ListContextProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const ListContext = createContext<ListContextProps>({
  selectedValue: '',
  onChange: () => {},
});
