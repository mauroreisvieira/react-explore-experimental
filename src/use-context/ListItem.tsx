import * as React from 'react';
import classNames from 'classnames';
import { ListContext } from './ListContext';

interface ListItemProps {
    value: string;
    onClick?: (event?: React.KeyboardEvent | React.MouseEvent) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
    value,
    onClick,
    children,
}: ListItemProps & React.PropsWithChildren<ListItemProps>) => {
    const { selectedValue, onChange } = React.useContext(ListContext);

    const isSelected = selectedValue === value;

    const handleClick = (
        event: React.KeyboardEvent | React.MouseEvent
    ): void => {
        if (onClick) onClick(event);
        if (isSelected) return;
        if (onChange) onChange(value);
    };

    return (
        <li className={classNames('flex', {
            'selected': isSelected
        })} onClick={handleClick}>
            {children}
        </li>
    );
};
