import React ,{useState} from 'react';
import Form from "./Form.js";
import Todo from "./Todo.js";
import {Link} from "react-router-dom";

function ListPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>待辦事項</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) =>(
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
      <div>
          <Link to="/">
              <button className="return_index_btn">返回首頁</button>
          </Link>
      </div>
    </div>
  );
}
export default ListPage
