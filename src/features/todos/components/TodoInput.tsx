import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addTodo } from "../todosSlice";
import { Button } from "@/components/ui/button";

export function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  const submit = () => {
    if (!todo.trim()) return;
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={submit}>Add</Button>
    </div>
  );
}
