import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/app/hooks";
import { setSearchQuery } from "../todosSlice";

export function TodoSearch() {
  const dispatch = useAppDispatch();

  return (
    <Input
      placeholder="Search todos..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      className="mb-2"
    />
  );
}
