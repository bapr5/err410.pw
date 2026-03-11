import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import './style.css';

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.body);
root.render(<App></App>)