import React from "react";
import "./App.css";
import {BrowserRouter } from "react-router-dom";
import Main from "./components/mainpage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
          <Main />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
