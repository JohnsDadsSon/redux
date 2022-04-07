import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="TodoItem">
      <p className={done && "todoItem--done"}>{name}</p>
      <Checkbox
        color="primary"
        checked={done}
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

export default TodoItem;
