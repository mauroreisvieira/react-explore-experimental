import React, { useState, useSyncExternalStore } from 'react';
// UI
import { Input } from '../components/Input';
import { Button } from '../components/Button';
// Store
import store from './store';

export default function UseSyncExternalStorePage(): React.ReactElement {
  const [text, setText] = useState('');

  const todos = useSyncExternalStore(store.subscribe, store.getTodos);

  const onHandleSubmit = () => {
    store.addTodo(text);
    setText('');
  };

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">
        `useSyncExternalStore` hook
      </h1>
      <div>
        <form onSubmit={onHandleSubmit} className="flex gap-4">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-9/12"
          />
          <Button type="submit" className="flex-1">
            Add Todo
          </Button>
        </form>

        <div className="my-12">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center">
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={() => store.toggleTodo(todo.id)}
                  className="mr-2"
                />
                {todo.completed ? <s>{todo.text}</s> : todo.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
