import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, setCheck } from "../features/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
const TodoItem = ({ name, done, id, theme }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="TodoItem">
      <p className={done && "todoItem--done"}>{name}</p>
      <Button color="error" onClick={handleDeleteClick}>
        <DeleteIcon />
      </Button>

      <Checkbox
        color={theme}
        checked={done}
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

export default TodoItem;
