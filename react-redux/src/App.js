import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import { Button } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
function App(props) {
  const todoList = useSelector(selectTodoList);
  const [isThemeChosen, setThemeChosen] = useState("false");
  const [themeHex, setThemeHex] = useState("");
  const [themeName, setThemeName] = useState("");
  function handleBlueClick() {
    setThemeHex("#a7d3ff75");
    setThemeName("primary");
    setThemeChosen(true);
  }
  function handlePurpleClick() {
    setThemeHex("#c7a3dd75");
    setThemeName("secondary");
    setThemeChosen(true);
  }

  if (isThemeChosen === true) {
    return (
      <div style={{ backgroundColor: themeHex }}>
        <div className="App">
          <Input theme={themeName} />
          <div className="app__container">
            <div className="app__todoContainer">
              {todoList.map((item) => (
                <TodoItem
                  theme={themeName}
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="themeScreen">
        <h1>Please select a theme colour</h1>
        <div className="themeButtons">
          <Button className="themeButtons" onClick={handleBlueClick}>
            <BrushIcon color="primary" sx={{ fontSize: 100 }} />
          </Button>
          <Button className="themeButtons" onClick={handlePurpleClick}>
            <BrushIcon color="secondary" sx={{ fontSize: 100 }} />
          </Button>
        </div>
      </div>
    );
}
export default App;
