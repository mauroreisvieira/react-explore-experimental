import React, { useState, useMemo, useDeferredValue } from 'react';
// Components
import { Input } from '../components/Input';

export const App = () => {
  const [name, setName] = useState<string>('');
  const deferredName = useDeferredValue(name);

  const LIST_SIZE: number = 100_000;

  const list = useMemo(() => {
    const dataList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(deferredName);
    }
    return dataList;
  }, [deferredName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
      <div>
        <Input type="text" value={name} onChange={handleChange} />
        <div>
          {list.map((item) => (
            <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
