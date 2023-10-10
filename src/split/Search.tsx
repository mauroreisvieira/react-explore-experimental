import React from 'react';
import { Input } from '../components/Input';

export const Search = (): React.ReactElement => {
    console.log('%cSearch Render', 'color: pink');
    const [value, setValue] = React.useState<string>('');

    return (
        <Input
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setValue(event.target.value)
            } />
    );
};
