import React, { useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
// UI
import { Input } from '../components/Input';
import { Button } from '../components/Button';
// Utilities
import { wait } from '../utils';
// Todos
import { initialTodos } from './initialTodos';

type Todo = (typeof initialTodos)[number];

export default function UseFormStatusPage(): React.ReactElement {
  const [todos, setTodos] = useState(initialTodos);

  const onHandleSubmit = async (data: FormData) => {
    const title = data.get('title');
    if (typeof title !== 'string') return;

    const newTodo = await createTodo(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">Experimental `useFormStatus` hook</h1>
      <div className="flex flex-col gap-12">
        <form action={onHandleSubmit} className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium text-sm">Title</label>
          <Input
            name="title"
            placeholder="Add new todo..."
            required
          />
          <SubmitButton />
        </form>

        <div>
          <p className="text-xl font-medium mb-4">Todos:</p>
          <ul>
            {todos.map(({ id, title }) => (
              <li key={id}>
                <span className="p-1">－</span>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Submit'}
    </Button>
  );
}

async function createTodo(title: string): Promise<Todo> {
  return wait({ id: new Date().getTime(), title }, 2000);
}
