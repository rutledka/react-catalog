import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    //this.addToCart = this.addToCart.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
  }
  render() {
    return (
      <div className="col-4">
        <div className="product">
          <img src={this.props.data.image} alt="" />
          <h4 className="product-name">{this.props.data.name} - <span className="price">${this.props.data.price}</span></h4>
          <a href="" className="product-overlay" onClick={this.viewDetails}>View Product Details</a>
        </div>
      </div>
    );
  }
  // addToCart(e) {
  //   e.preventDefault();
  //   console.log('this is in a function in the product component');
  //   this.props.addProductToCart({'name': this.props.data.name});
  // }
  viewDetails(e) {
    e.preventDefault();
    this.props.viewDetails(this.props.data);
    console.log('view details in product');
  }
}

export default Product;
