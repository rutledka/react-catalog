import React from 'react';

class ProductOverlay extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.dismissOverlay = this.dismissOverlay.bind(this);
  }
  render() {
    return (
      <div className="product-detail-overlay" data-state={this.props.isActive} onClick={this.dismissOverlay}>
        <div className="product-details">
          <h3>{this.props.data.name}</h3>
          <img src={this.props.data.image} />
          <p className="description">{this.props.data.details}</p>
          <a href="" onClick={this.addToCart}>Add To Cart</a>
        </div>
      </div>
    );
  }
  addToCart() {
    console.log('add to cart from product overlay');
  }
  dismissOverlay() {
    this.props.dismissOverlay();
    console.log('dismissing overlay');
  }
}

ProductOverlay.propTypes = {
  data: React.PropTypes.object.isRequired,
  isActive: React.PropTypes.string.isRequired
}

export default ProductOverlay;
