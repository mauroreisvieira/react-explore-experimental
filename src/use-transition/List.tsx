import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children }: ListProps): React.ReactElement => (
  <ul>{children}</ul>
);
