import * as React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const App = (): React.ReactElement => {
    console.log('%cApp Render', 'color: blue');
    const [counter, setCounter] = React.useState<number>(0);
    const [value, setValue] = React.useState<string>('');

    const decrease = React.useCallback(
        () => setCounter(counter - 1),
        [counter]
    );

    const increase = React.useCallback(
        () => setCounter(counter + 1),
        [counter]
    );

    const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value),
        []
    );

    return (
        <>
            <h1>Hey Folks 👋🏼</h1>
            <div>
                <Input value={value} onChange={handleChange} />
            </div>
            <Button onClick={decrease}>-</Button>
            <span>{counter}</span>
            <Button onClick={increase}>+</Button>
        </>
    );
};
