import React, { useReducer } from 'react';
import { Button } from '../components/Button';

type Action = {
    type: 'reset' | 'decrement' | 'increment';
};

type State = {
    count: number;
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'reset':
            return { count: 0 };
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export const App = (): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <p>Count: {state.count}</p>

            <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        </>
    );
};
