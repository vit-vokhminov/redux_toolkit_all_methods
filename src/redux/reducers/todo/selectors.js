import { createSelector } from "@reduxjs/toolkit";

export const selectAllTodos = (state) => state.todos.list;
export const selectActiveFilter = (state) => state.filters;

// Good approach
export const selectTodosByFilter = createSelector([selectAllTodos, selectActiveFilter], (allTodos, activeFilter) => {
    if (activeFilter === "all") return allTodos;

    if (activeFilter === "completed") {
        return allTodos.filter((todo) => todo.completed);
    }

    return allTodos.filter((todo) => !todo.completed);
});

// Not optimal approach
export const alternativeSelectTodosByFilter = (state) => {
    const allTodos = state.todos.list;
    const activeFilter = state.filters;

    if (activeFilter === "all") return allTodos;

    if (activeFilter === "completed") {
        return allTodos.filter((todo) => todo.completed);
    }

    return allTodos.filter((todo) => !todo.completed);
};

// import { store } from "@store/store";
// import { RootState } from "@store/store";
// import { createSelector } from "@reduxjs/toolkit";

// const selectState = (state: RootState = store.getState()) => state.mode;

// const selectCurrentTheme = createSelector(selectState, (state) => state.isDarkMode);

// const modeSelectors = {
//     selectCurrentTheme,
// };

// export default modeSelectors;
