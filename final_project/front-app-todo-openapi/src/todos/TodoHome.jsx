import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoHome = ({ states, callbacks }) => {
    return (
        <Routes>
            <Route path="/"
                element={<TodoList states={states} callbacks={callbacks}/>}/>
            <Route path="add"
                element={<AddTodo callbacks={callbacks}/>}/>
        </Routes>
    )
}

export default TodoHome