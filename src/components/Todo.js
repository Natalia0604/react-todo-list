import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    
    return(
        <div className="todo">
            <li className="todo-item">{text}
            <button onClick={deleteHandler} className="delete-btn">刪除</button>
            </li>
        </div>
    );
};
export default Todo;