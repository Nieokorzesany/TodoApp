import React from "react";
import style from "./Todo.css";

const Todo = props => {
  return (
    <div className={style.Todo}>
      <h1>{props.text}</h1>
      <button onClick={() => props.remove(props.id)}>x</button>
    </div>
  );
};

export default Todo;
