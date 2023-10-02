import React, {
  useState,
  useRef,
  FormEvent,
  experimental_useOptimistic as useOptimistic,
} from 'react';
import { wait } from '../utils';
import { initialTodos } from './initialTodos';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

type Todo = (typeof initialTodos)[number];

type OptimisticTodos = Todo & {
  pending?: boolean;
};

export default function UseOptimisticPage(): React.ReactElement {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, setOptimisticTodos] =
    useOptimistic<OptimisticTodos[]>(todos);
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current === null || !inputRef.current.validity) return;

    const optimisticTodo: OptimisticTodos = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      pending: true,
    };

    setOptimisticTodos((prev) => [...prev, optimisticTodo]);

    const newTodo = await createTodo(optimisticTodo.title);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">
        Experimental `useOptimistic` hook
      </h1>
      <div className="flex flex-col gap-12">
        <form onSubmit={onHandleSubmit} className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium text-sm">Title</label>
          <Input ref={inputRef} placeholder="Add new todo..." required />
          <Button>Submit</Button>
        </form>

        <div>
          <p className="text-xl font-medium mb-4">Todos:</p>
          <ul>
            {optimisticTodos.map(({ id, title, pending }) => (
              <li key={id}>
                <span className="p-1">－</span>
                {title}{' '}
                {pending ? (
                  <span className="italic text-sm text-gray-500">
                    (pending)
                  </span>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

async function createTodo(title: string): Promise<Todo> {
  return wait({ id: new Date().getTime(), title }, 2000);
}
