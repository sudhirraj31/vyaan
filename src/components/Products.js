import React, { Component } from "react";
import "./product.css";
import expanded from "./img/expanded.png";
import airflow from "./img/airflow.png";
import silicone from "./img/silicone.png";
import filter from "./img/filter.png";
import filterring from "./img/ring.jpg";

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center m-3">
          <img src={expanded} alt="loading" className="img-fluid" />
        </div>
        <div className="row justify-content-center text-center m-1">
          <h2>Vyaan HEPA Reusable Respirator</h2>
          <p>
            Stay healthy and breathe clean air with Vyaan N99 mask. Designed for
            superior particle and other pollutant filtration technology.
          </p>
        </div>
        <div className="row ">
          <div className="col-12 m-3">
            <h1 className="text-center m-3">Product Features</h1>

            <div className="row ">
              <div className="col-12 col-md-6 align-self-center text-center text-md-right">
                <h3
                  style={{
                    color: "#2D9CDB",
                    borderBottom: "1px solid #2D9CDB",
                  }}
                >
                  Smooth and Efficient Air Flow
                </h3>
                <ul className="list-unstyled ">
                  <li>Compact and Stylish</li>
                  <li>Comfortable Fit with Unhindered Field of View</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-center airflow">
                <img src={airflow} className="img-fluid" alt="mask"  />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src={silicone} className="img-fluid" alt="mask"  />
            </div>
            <div className="col-12 col-md-6 align-self-center text-center text-md-left">
              <h3
                style={{ color: "#2D9CDB", borderBottom: "1px solid #2D9CDB" }}
              >
                Food Grade Silicone
              </h3>
              <ul className="list-unstyled ">
                <li>Perfectly seals different face types</li>
                <li>Skin Friendly material</li>
                <li>Doesn’t cause Rashes and prevents infection</li>
              </ul>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-4 justify-content-center">
              <img src={filter} className="img-fluid" alt="filter"  />
              <h5 className="m-3">Filter</h5>
            </div>
            <div className="col-md-4 align-self-center">
              <h3
                style={{ color: "#2D9CDB", borderBottom: "1px solid #2D9CDB" }}
              >
                Easier to Breathe – Minimal Pressure Drop
              </h3>
              <ul className="list-unstyled text-center">
                <li>Comes with special Nano-Fiber Coating</li>
                <li>Material Produced through Electrospinning</li>
                <li>Lower Filter Replacement Cost</li>
              </ul>
            </div>
            <div className="col-md-4 justify-content-center">
              <img src={filterring} className="img-fluid" alt="ring" />
              <h5 className="m-3">Filter Support</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
