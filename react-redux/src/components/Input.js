import React, { useState } from "react";
import "./Input.css";
import Button from "@mui/material/Button";
import { TextField, Switch, FormControlLabel, FormGroup } from "@mui/material";
import { useFormControl } from "@mui/material/FormControl";
const Input = () => {
  const [input, setInput] = useState("");
  const addTodo = () => {};

  return (
    <div className="input">
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="outlined-basic"
        label="Type your To-Do"
        variant="outlined"
      />

      <Button value={input} s variant="contained">
        Add New To-Do
      </Button>

      {/* <FormGroup>
        <FormControlLabel
          control={<Switch color="warning" label="Urgent" />}
          label="Urgent"
          id="urgentToggle"
        />
      </FormGroup> */}
    </div>
  );
};

export default Input;

{
  /* <input
          id="inputBox"
          type="text"
          value={input}
          placeholder="Type your To-Do"
          onChange={(e) => setInput(e.target.value)}
        /> */
}
