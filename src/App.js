import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Started an app for technical assesment."),
  ]);
}
export default App;

ReactDOM.render(React.createElement(App), document.getElementById("root"));
