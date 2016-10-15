import React from 'react';
import actions from '../store/actions';
// Dumb Component

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

// Will contain a smart component that dispatches an action to go to the cart/checkout form.
// This component might be composed of a generic <link> 'dumb' component

Cart.propTypes = {
  isVisible : React.PropTypes.bool.isRequired,
  cartItems : React.PropTypes.array.isRequired
}

// Dumb Comonent

const CartItem = ({ key, children }) => {
  return (
    <li className="item">
      <img src="http://placehold.it/100/100" alt="" />
      <p className="name">Item</p>
      <span className="price">$20</span>
      <CartItemLink id={key} />
    </li>
  )
}

class CartItemLink extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    const { store } = this.context;
    const { id } = this.props;
    return (
      <a href="#"
        className="icon icon-remove"
        onClick = {
          (e) => {
            e.preventDefault();
            store.dispatch(actions.updateCartItemQuantity(id, 0))
          }
        }
      >
        Remove
      </a>
    )
  }
}

CartItem.contextTypes = {
  store : React.PropTypes.object
}

CartItem.propTypes = {
  id : React.PropTypes.number.isRequired
}

export default Cart;
