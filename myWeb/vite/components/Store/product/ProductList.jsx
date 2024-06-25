import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  showProducts() {
    if (Array.isArray(this.props.products)) {
    return (
      this.props.products &&
      this.props.products.map (product => (
        <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder}
        onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}/>
      ))
    )
    };
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default ProductList;
