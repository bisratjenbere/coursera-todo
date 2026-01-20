import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodosState } from "./types";

const initialState: TodosState = {
  items: [],
  filter: "all",
  searchQuery: "",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare(title: string) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title,
            completed: false,
          },
        };
      },
      reducer(
        state,
        action: PayloadAction<{
          id: string;
          title: string;
          completed: boolean;
        }>,
      ) {
        state.items.push(action.payload);
      },
    },

    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    setFilter(state, action: PayloadAction<TodosState["filter"]>) {
      state.filter = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setSearchQuery, setFilter } =
  todosSlice.actions;

export default todosSlice.reducer;
