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
                href="https://www.amazon.in/Vyaan-HEPA-Reusable-Mask/dp/B08LHCZNMH/ref=sr_1_1?dchild=1&m=A1RA5KMP67XCP7&marketplaceID=A21TJRUUN4KGV&qid=1604436857&s=merchant-items&sr=1-1"
                className="col-12 mt-5"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-info"
                role="button"
              >
                Buy Now
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
