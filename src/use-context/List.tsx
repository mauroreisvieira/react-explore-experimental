import * as React from 'react';
import { ListContext } from './ListContext';
import { cn } from '../utils';

interface ListProps {
    className?: string;
    selectedValue: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
}

export const List= ({
    children,
    className,
    selectedValue,
    onChange,
}: ListProps) => (
    <ul className={cn('flex', className)}>
        <ListContext.Provider
            value={{
                selectedValue,
                onChange,
            }}
        >
            {children}
        </ListContext.Provider>
    </ul>
);
