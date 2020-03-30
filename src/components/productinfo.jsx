import React, { Component } from "react";

class ProductInfo extends Component {
  state = {};
  render() {
    return (
      <div className="productinfo">
        <h2>Product Features</h2>
        {this.props.products.map((products, k) => (
          <li>{products.description}</li>
        ))}
        <div>
          {this.props.products.map(products => (
            <div>{products.features}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductInfo;
