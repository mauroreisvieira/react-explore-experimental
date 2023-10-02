import { useContext } from 'react';
import { ListContext } from './ListContext';
import { cn } from '../utils';

interface ListItemProps {
  value: string;
  onClick?: (event?: React.KeyboardEvent | React.MouseEvent) => void;
  children: React.ReactNode;
}

export const ListItem = ({ value, onClick, children }: ListItemProps) => {
  const { selectedValue, onChange } = useContext(ListContext);

  const isSelected = selectedValue === value;

  const handleClick = (event: React.KeyboardEvent | React.MouseEvent): void => {
    if (onClick) onClick(event);
    if (isSelected) return;
    if (onChange) onChange(value);
  };

  return (
    <li className={cn(isSelected && 'text-indigo-500')} onClick={handleClick}>
      {children}
    </li>
  );
};
