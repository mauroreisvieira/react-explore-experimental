import * as React from 'react';
import classNames from 'classnames';
import { ListContext } from './ListContext';

interface ListProps {
    className?: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

export const List: React.FC<ListProps> = ({
    children,
    className,
    selectedValue,
    onChange,
}: ListProps & React.PropsWithChildren<ListProps>) => (
    <ul className={classNames('flex', className)}>
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
