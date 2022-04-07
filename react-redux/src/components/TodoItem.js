import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const deleteTodo = (id) => {};

  return (
    <div className="TodoItem">
      <p className={done && "todoItem--done"}>{name}</p>
      <Button color="error" onClick={deleteTodo(id)}>
        <DeleteIcon />
      </Button>

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
