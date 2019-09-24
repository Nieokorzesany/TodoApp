import React from "react";

const Title = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.tasks} todos</h2>
    </div>
  );
};

export default Title;
