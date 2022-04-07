import "./App.css";
import React from "react";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div>
      <div className="App">
        <Input />
        <div className="app__container">
          <div className="app__todoContainer">
            {todoList.map((item) => (
              <TodoItem name={item.item} done={item.done} id={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
