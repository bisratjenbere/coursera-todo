import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Todo } from "../types";
import { useAppDispatch } from "@/app/hooks";
import { toggleTodo, deleteTodo } from "../todosSlice";
import React from "react";
import { EditTodoModal } from "./EditTodoModal";

export function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

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
      <div className="flex gap-2">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>

        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>
      <EditTodoModal
        open={open}
        setOpen={setOpen}
        todoId={todo.id}
        currentTitle={todo.title}
      />
    </div>
  );
}
