import React, {
  useState,
  useRef,
  FormEvent,
  experimental_useOptimistic as useOptimistic,
} from 'react';
import { wait } from '../utils';
import { initialTodos } from './initialTodos';

type Todo = typeof initialTodos[number];

type OptimisticTodos = Todo & {
  pending: boolean;
};

export function App(): React.ReactElement {
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

    inputRef.current.value = '';

    setOptimisticTodos((prev) => [...prev, optimisticTodo]);

    const newTodo = await createTodo(optimisticTodo.title);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="flex flex-col gap-24">
      <form onSubmit={onHandleSubmit} className="flex flex-col gap-2">
        <label className="text-gray-600 font-medium text-sm">Title</label>
        <input
          ref={inputRef}
          className="rounded outline-none focus:outline-offset-2 focus:outline-indigo-500"
          placeholder="Add new todo..."
          required
        />
        <button className="p-4 bg-indigo-500 text-white rounded outline-offset-2 outline-indigo-500">
          Submit
        </button>
      </form>

      <div>
        <p className="text-xl font-medium mb-4">Todos:</p>
        <ul>
          {optimisticTodos.map(({ id, title, pending }) => (
            <li key={id}>
              <span className="p-1">－</span>
              {title}{' '}
              {pending ? (
                <span className="italic text-sm text-gray-500">(pending)</span>
              ) : (
                ''
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

async function createTodo(title: string): Promise<Todo> {
  return wait({ id: new Date().getTime(), title }, 2000);
}
