// features/todos/selectors.ts
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export const selectTodosState = (state: RootState) => state.todos;

export const selectFilteredTodos = createSelector(
  [selectTodosState],
  ({ items, filter, searchQuery }) => {
    let filtered = items;

    if (filter === "active") filtered = filtered.filter((t) => !t.completed);
    if (filter === "completed") filtered = filtered.filter((t) => t.completed);

    if (searchQuery.trim()) {
      filtered = filtered.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return filtered;
  },
);
