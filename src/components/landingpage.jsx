import React, { Component } from "react";
import "./landingpage.css";
import Products from "./Products";
import landingimage from "./img/landingimage.png";

class Landingpage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid d-flex  landingpage">
          <div className="row align-items-center ">
            <div className="col-12 col-md-5 offset-md-1 titles">
              <h1 className="mt-5">VYAAN HEPA</h1>
              <h4>Stylish Face Mask</h4>
              <p>
                Vyaan HEPA Reusable facemask is a simple and elegant air
                purifying respirator specially designed for the protection of
                general consumers.
              </p>
              <a
                href="#productinfo"
                className="col-12 mt-5"
                class="btn btn-info"
                role="button"
              >
                Explore
              </a>
            </div>
            <div className="col-12 col-md-6 mainimage">
              <img src={landingimage} alt="face mask" className="img-fluid" />
            </div>
          </div>
        </div>
        <div id="productinfo">
          <Products />
        </div>
      </div>
    );
  }
}

export default Landingpage;
