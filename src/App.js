import React from "react";
import "./App.css";
import Footers from "./components/footer";
import Main from "./components/mainpage";

function App() {
  return (
    <div className="main">
      <div className="main-content ">
        <Main />
      </div>
      <hr className="bottomline" />
      <div className="footer">
        <Footers />
      </div>
    </div>
  );
}

export default App;
