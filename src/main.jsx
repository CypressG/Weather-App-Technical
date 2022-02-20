import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./components/App";
import Weather from "./components/Weather";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/city">
        <Route path=":locationId" element={<Weather />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./components/App/style.scss";
// import App from "./components/App";

// const rootElement = document.getElementById("root");

// ReactDOM.render(React.createElement(App), rootElement);
