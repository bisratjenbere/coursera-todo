import { TodoInput } from "@/features/todos/components/TodoInput";
import { TodoList } from "@/features/todos/components/TodoList";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setFilter } from "@/features/todos/todosSlice";
import { useState } from "react";
import { TodoSearch } from "@/features/todos/components/TodoSearch";

export default function TodoPage() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.todos.filter);
  const [searchQuery, handleSearch] = useState("");

  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">To-Do App</h1>
      <TodoInput />
      <div className="flex gap-2">
        {(["all", "active", "completed"] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            onClick={() => dispatch(setFilter(f))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>
      <TodoSearch handleSearch={handleSearch} />
      <TodoList searchQuery={searchQuery} />
    </div>
  );
}
