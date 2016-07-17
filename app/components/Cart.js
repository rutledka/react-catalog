import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="checkout-cart">
        <a href="" className="checkout-bag">
          <span className="checkout-bag-badge">4</span>
        </a>
        <div className="checkout-cart-contents">
          <h4>In Your Cart</h4>
          <ul className="items">
              { this.props.cartItems.map((cartItem) => ( <CartItem data={cartItem} key={cartItem.productID} /> )) }
          </ul>
        </div>
      </div>
    );
  }
}

Cart.PropTypes = {
  isVisible : React.PropTypes.bool.isRequired,
  cartItems : React.PropTypes.array.isRequired
}

class CartItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li className="item">
        <img src="http://placehold.it/100/100" alt="" />
        <p className="name">Item</p>
        <span className="price">$20</span>
        <a href="">Remove</a>
      </li>
    )
  }
}

export default Cart;
