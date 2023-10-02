import React, { useState, useTransition } from 'react';
import { faker } from '@faker-js/faker';
import { Input } from '../components/Input';

import { List } from './List';
import { ListItem } from './ListItem';

const fakeNames = Array.from(Array(9000), (): string => faker.person.fullName());

export const App: React.FC = (): React.ReactElement => {
    const [query, setQuery] = useState<string>('');
    const [highlight, setHighlight] = useState<string>('');

    const [isPending, startTransition] = useTransition();

    const changeHandler = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(value);
        startTransition(() => setHighlight(value));
    };

    return (
        <>
            <Input onChange={changeHandler} value={query} />
            { isPending && <span className="loading">Loading...</span>}
            <List>
                {fakeNames.map((name, i) => (
                    <ListItem key={i} name={name} highlight={highlight} />
                ))}
            </List>
        </>
    );
};
