import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header/index";
import Results from "../Results/index";
import Weather from "../Weather/index";
import "./style.scss";

const App = () => (
  <div id="container">
    <Header />
    <Results />
    <Weather />
  </div>
);
export default App;

ReactDOM.render(React.createElement(App), document.getElementById("root"));
