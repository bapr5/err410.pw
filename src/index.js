import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <p>Hello, webpack!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.body);
// ReactDOM.render(<App />, document.getElementById("root"));
root.render(<App></App>)