import * as React from 'react';

interface ListItemProps {
    name: string;
    highlight: string;
}

export const ListItem: React.FC<ListItemProps> = ({
    name,
    highlight,
}: ListItemProps): React.ReactElement | null => {
    const index = name.toLowerCase().indexOf(highlight.toLowerCase());
    if (index === -1) return null;

    return (
        <li>
            {name.slice(0, index)}
            <span className="highlight">
                {name.slice(index, index + highlight.length)}
            </span>
            {name.slice(index + highlight.length)}
        </li>
    );
};
