import React from "react";
import { render } from "react-dom";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <h1>Time Until . . . </h1>
      <Form />
    </div>
  );
};

render(<App />, document.getElementById("root"));
