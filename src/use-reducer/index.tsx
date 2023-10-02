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

export default function UseReducerPage(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1 className="text-2xl font-normal mb-12">`useReducer` hook</h1>
      <div className="flex flex-col gap-4">
        <span className="flex-1 text-center border p-4">{state.count}</span>
        <div className="flex gap-4">
          <Button
            skin="danger"
            className="flex-1"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </Button>
          <Button
            className="flex-1"
            onClick={() => dispatch({ type: 'increment' })}
          >
            +
          </Button>
          <Button
            className="flex-1"
            onClick={() => dispatch({ type: 'decrement' })}
          >
            -
          </Button>
        </div>
      </div>
    </>
  );
}
