import * as React from 'react';

interface ListProps {
    children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({
    children,
}: ListProps): React.ReactElement => <ul>{children}</ul>;
