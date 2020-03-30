import React, { Component } from "react";

class ProductVersion extends Component  {
render() {
    return (
      <div className="productname">
        {this.props.products.map((products) => <a href ="./productinfo">{products.name}</a>)}
      </div>
    );
  }
}

export default ProductVersion;
