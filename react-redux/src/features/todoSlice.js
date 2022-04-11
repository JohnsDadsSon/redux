import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.todoList.findIndex(({ id }) => id == action.payload);
      return void { todoList: [...state.todoList.splice(index, 1)] };
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, deleteTodo, setCheck } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
