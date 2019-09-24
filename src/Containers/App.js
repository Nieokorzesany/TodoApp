import React from "react";
import style from "./App.css";
import uuid from "uuid";
import Title from "../Components/Title";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ]
    };
  }
  handleAddTodoChange = event => {
    this.setState({ todo: event.target.value });
  };
  addTodo = val => {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ todo: "", data: data });
  };
  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title={"My Todo App"} tasks={this.state.data.length} />
        <TodoForm
          addTodo={this.addTodo}
          change={this.handleAddTodoChange}
          todo={this.state.todo}
        />
        <TodoList data={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default hot(module)(App);
