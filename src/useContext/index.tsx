import * as React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export const App: React.FC = () => {
    const [item, setItem] = React.useState<string>('item-1');
    return (
        <div>
            <List
                selectedValue={item}
                onChange={(value: string) => setItem(value)}
            >
                <ListItem value="item-1">Item #1</ListItem>
                <ListItem value="item-2">Item #2</ListItem>
                <ListItem value="item-3">Item #3</ListItem>
                <ListItem value="item-4">Item #4</ListItem>
                <ListItem value="item-5">Item #5</ListItem>
            </List>
        </div>
    );
};
