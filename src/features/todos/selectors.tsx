import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export const selectTodosState = (state: RootState) => state.todos;

export const selectFilteredTodos = createSelector(
  [selectTodosState],
  ({ items, filter }) => {
    let filtered = items;

    if (filter === "active")
      filtered = filtered.filter((todoItem) => !todoItem.completed);
    if (filter === "completed")
      filtered = filtered.filter((todoItem) => todoItem.completed);

    return filtered;
  },
);
