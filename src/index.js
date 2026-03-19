import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import './style.css';
import KeyReader from "./components/KeyReader/KeyReader";

function App() {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
window.add
function applyTheme() {
  if (prefersLight.matches) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}

applyTheme();
prefersLight.addEventListener("change", applyTheme);
  return (
    <div id="base">
      <Header />
      <KeyReader></KeyReader>
    </div>
  );
}

const root = ReactDOM.createRoot(document.body);
root.render(<App></App>)