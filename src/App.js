import React from "react";
import "./App.css";
import Footers from "./components/footer";
import { Navigation } from "react-mdl";
import Main from "./components/mainpage";
import logo from "./img/vyaanlogo.png";

function App() {
  return (
    <div className="main">
      <div className="container header">
        <div className="row">
          <div className="col-4">
            <a href="/">
              <img src={logo} alt="vyaanlogo" />
            </a>
          </div>
          <div className="col-8">
            <Navigation className="navigation">
              <a href="/">Home</a>
              <a href="./Products">Products</a>
              <a href="./blog">Blog</a>
              <a href="./aboutus">About Us</a>
              <a href="./contactus">Contact Us</a>
              {/* <a href="./careers">Careers</a> */}
            </Navigation>
          </div>
        </div>
      </div>
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
