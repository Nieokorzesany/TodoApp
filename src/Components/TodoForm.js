import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.todo} />
      <button onClick={() => props.addTodo(props.todo)}>Add</button>
    </div>
  );
};

export default TodoForm;
