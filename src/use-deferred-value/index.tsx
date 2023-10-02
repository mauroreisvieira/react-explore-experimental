import React, { memo, useState,  useDeferredValue } from 'react';
// Components
import { Input } from '../components/Input';

export default function UseDeferredValuePage() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">
        `useDeferredValue` hook
      </h1>
      <div className="flex flex-col gap-12">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing to search..."
        />
        <SlowList text={deferredText} />
      </div>
    </>
  );
}

const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 300 <SlowItem />');

  const items = [];
  for (let i = 0; i < 300; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  const startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
}

