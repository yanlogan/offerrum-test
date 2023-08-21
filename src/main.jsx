import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";

const setVh = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${0.01 * window.innerHeight}px`
  );
};

setVh();

["resize", "orientationchange"].forEach((e) =>
  window.addEventListener(e, () => {
    setVh();
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
