import React, {
  useState,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from 'react';
// UI
import { Button } from '../components/Button';

export default function UseEffectEventPage(): React.ReactElement {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  // useEffectEvent, is a really unique and interesting hook that make working with useEffect much easier.
  // This is because it allows you to use variables, state, and props in your useEffect without having to declare them as dependencies for your useEffect.
  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      onTick();
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay]);

  const handleReset = () => {
    setCount(0);
  };

  const onHandleIncrementDecrease = () => {
    if (increment === 0) return;
    setIncrement((i) => i - 1);
  };

  const onHandleIncrementIncrease = () => {
    setIncrement((i) => i + 1);
  };

  const onHandleDelayDecrease = () => {
    if (delay === 100) return;
    setDelay((d) => d - 100);
  };

  const onHandleDelayIncrease = () => {
    setDelay((d) => d + 100);
  };

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">`useEffectEvent` hook</h1>
      <div className="flex flex-col gap-8">
        <p className="text-xl">
          Counter: {count}
        </p>
        <div className="flex gap-4 items-center font-medium">
          Increment by:
          <div className="flex gap-4 items-center">
            <Button onClick={onHandleIncrementDecrease}>-</Button>
            <span className="border rounded p-4">{increment}</span>
            <Button onClick={onHandleIncrementIncrease}>+</Button>
          </div>
        </div>
        <div className="flex gap-4 items-center font-medium">
          Increment delay:
          <Button disabled={delay === 100} onClick={onHandleDelayDecrease}>
            -100 ms
          </Button>
          <span className="border rounded p-4">{delay}ms</span>
          <Button onClick={onHandleDelayIncrease}>+100 ms</Button>
        </div>
        <Button onClick={handleReset} skin='danger'>Reset</Button>
      </div>
    </>
  );
}
