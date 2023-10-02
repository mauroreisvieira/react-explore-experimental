import React, {useCallback } from 'react';
 // UI
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function UseCallbackPage(): React.ReactElement {
  console.log('%cApp Render', 'color: blue');
  const [counter, setCounter] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>('');

  const decrease = useCallback(() => setCounter(counter - 1), [counter]);

  const increase = useCallback(() => setCounter(counter + 1), [counter]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
    [],
  );

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">
        `useCallback` hook
      </h1>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <Input value={value} onChange={handleChange} />
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
          <Button onClick={decrease} className="flex-1">
            -
          </Button>
          <span className="flex-1 text-center border p-4">{counter}</span>
          <Button onClick={increase} className="flex-1">
            +
          </Button>
        </div>
      </div>
    </>
  );
}
