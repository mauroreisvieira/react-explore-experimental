import * as React from 'react';
import faker from 'faker';
import { Input } from '../components/Input';

const fakeNames = Array.from(Array(9000), (): string => faker.name.findName());

interface ListItemProps {
    name: string;
    highlight: string;
}

const ListItem: React.FC<ListItemProps> = ({
    name,
    highlight,
}: ListItemProps): React.ReactElement | null => {
    const index = name.toLowerCase().indexOf(highlight.toLowerCase());
    if (index === -1) return null;

    return (
        <div>
            {name.slice(0, index)}
            <span className="highlight">
                {name.slice(index, index + highlight.length)}
            </span>
            {name.slice(index + highlight.length)}
        </div>
    );
};

export const List: React.FC = (): React.ReactElement => {
    const [query, setQuery] = React.useState<string>('');
    const [highlight, setHighlight] = React.useState<string>('');

    const [isPending, startTransition] = React.useTransition();

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
            {fakeNames.map((name, i) => (
                <ListItem key={i} name={name} highlight={highlight} />
            ))}
        </>
    );
};
