import React from "react";

import Filters from "components/todo/Filters";
import NewTodoForm from "components/todo/NewTodoForm";
import ThemeSelector from "components/todo/ThemeSelector";
import TodoList from "components/todo/TodoList";
import TotalInfo from "components/todo/TotalInfo";

function TodoReselect() {
   
    return (
        <div className="todo_main">
            <ThemeSelector />
            <NewTodoForm />
            <Filters />
            <TodoList />
            <TotalInfo />
        </div>
    );
}

export default TodoReselect;
