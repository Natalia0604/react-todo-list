import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, id:Math.random()*100}
        ]);
        setInputText(""); //將搜尋框清空
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler}  className="todo-button" type="submit">新增</button>
        </form>
    );
};
export default Form;