// features/todos/components/EditTodoModal.tsx
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { EditTodo } from "../todosSlice";
interface EditTodoModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  todoId: string;
  currentTitle: string;
}

export function EditTodoModal({
  open,
  setOpen,
  todoId,
  currentTitle,
}: EditTodoModalProps) {
  const [title, setTitle] = React.useState(currentTitle);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTitle(currentTitle);
  }, [currentTitle]);

  const save = () => {
    if (!title.trim()) return;
    dispatch(EditTodo({ id: todoId, title }));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          autoFocus
        />

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={save}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
