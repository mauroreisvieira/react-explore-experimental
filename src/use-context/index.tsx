import React, { useState } from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export default function UseContextPage() {
  const [item, setItem] = useState<string>('item-1');
  return (
    <div>
      <h1 className="text-2xl font-normal mb-12">
        `useContext` and `createContext` hook
      </h1>
      <List selectedValue={item} onChange={(value: string) => setItem(value)}>
        <ListItem value="item-1">Item #1</ListItem>
        <ListItem value="item-2">Item #2</ListItem>
        <ListItem value="item-3">Item #3</ListItem>
        <ListItem value="item-4">Item #4</ListItem>
        <ListItem value="item-5">Item #5</ListItem>
      </List>
    </div>
  );
}
