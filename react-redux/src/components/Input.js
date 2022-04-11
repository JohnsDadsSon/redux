import React, { useState } from "react";
import "./Input.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import { v4 as uuidv4 } from "uuid";
const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  window.onkeydown = function (event) {
    if (event.keyCode === 13) {
      addTodo();
    }
  };
  const addTodo = () => {
    if (document.getElementById("outlined-basic").value === "") {
      alert("Enter a To-Do Item");
    } else {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: uuidv4(),
        })
      );
      setInput("");
    }
  };
  return (
    <div className="input">
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="outlined-basic"
        label="Type your To-Do"
        variant="outlined"
        autoComplete="off"
      ></TextField>

      <Button
        className="addTodoButton"
        id="addTodoButton"
        value={input}
        variant="contained"
        onClick={addTodo}
        color="primary"
      >
        Add New To-Do
      </Button>
    </div>
  );
};

export default Input;
