interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoCallback = () => void;

let todos: Todo[] = [];
const subscribers: Set<TodoCallback> = new Set();

const store = {
  getTodos(): Todo[] {
    // Method to get the todos array.
    return todos;
  },
  // Subscribe method adds the "callback" to the "subscribers" set, and
  // return a method to unsubscribe from the store.
  subscribe(callback: TodoCallback): () => void {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },
  addTodo(text: string): void {
    todos = [
      ...todos,
      {
        id: new Date().getTime(),
        text: text,
        completed: false,
      },
    ];

    subscribers.forEach((callback) => {
      callback();
    });
  },
  toggleTodo(id: number): void {
    todos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    subscribers.forEach((callback) => callback());
  },
};

export default store;
