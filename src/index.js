import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import TodoList from "./components/TodoList";

var dest = document.querySelector("#root");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  dest
);
