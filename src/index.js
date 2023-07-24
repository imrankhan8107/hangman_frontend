import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
