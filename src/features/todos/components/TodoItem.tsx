import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Todo } from "../types";
import { useAppDispatch } from "@/app/hooks";
import { toggleTodo, deleteTodo } from "../todosSlice";

export function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className={todo.completed ? "line-through text-muted" : ""}>
          {todo.title}
        </span>
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </Button>
    </div>
  );
}
