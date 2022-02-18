import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header/index";
import Main from "../Main/index";
import "./style.scss";

const App = () => (
  <div id="container">
    <Header />
    <Main />
  </div>
);
export default App;

ReactDOM.render(React.createElement(App), document.getElementById("root"));
