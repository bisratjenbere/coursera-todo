import { useAppSelector } from "@/app/hooks";
import { selectFilteredTodos } from "../selectors";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useAppSelector(selectFilteredTodos);

  if (!todos.length) {
    return <p className="text-center text-muted">No tasks yet</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
