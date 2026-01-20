export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
  filter: "all" | "active" | "completed";
  searchQuery: string;
}
