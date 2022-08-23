import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./reducers/user/userSlice";

import todoReducer from "./reducers/todo/todoSlice";
import filterReducer from "./reducers/todo/filterSlice";
import themeReducer from "./reducers/todo/themeSelector";

import { postAPI } from "services/PostService";

const rootReducer = combineReducers({
    // обычный слайс
    userReducer,
    // Reselect 
    todos: todoReducer,
    filters: filterReducer,
    theme: themeReducer,
    // RTK Query
    [postAPI.reducerPath]: postAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    // RTK Query
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
