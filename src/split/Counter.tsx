import * as React from 'react';
import { Button } from '../components/Button';

export const Counter = (): React.ReactElement => {
    console.log('%cCounter Render', 'color: orange');
    const [counter, setCounter] = React.useState<number>(0);

    const decrease = React.useCallback(
        () => setCounter(counter - 1),
        [counter]
    );

    const increase = React.useCallback(
        () => setCounter(counter + 1),
        [counter]
    );

    return (
        <>
            <Button onClick={decrease}>-</Button>
            <span>{counter}</span>
            <Button onClick={increase}>+</Button>
        </>
    );
};
