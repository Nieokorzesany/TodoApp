import React from "react";
import Todo from "../Components/Todo";

const TodoList = props => {
  const listTodo = props.data.map(todo => (
    <div key={todo.id}>
      <Todo text={todo.text} id={todo.id} remove={props.remove} />
    </div>
  ));
  return <div>{listTodo}</div>;
};

export default TodoList;
