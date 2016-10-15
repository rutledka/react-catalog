import React from 'react';
import actions from '../store/actions';
// Smart Component

class Cart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const cart = state.cart;
    console.log(state, cart);
    if ( cart.items.length ) {
      return (
        <div className="checkout-cart">
          <a href="" className="checkout-bag">
            <span className="checkout-bag-badge">4</span>
          </a>
          <div className="checkout-cart-contents">
            <h4>In Your Cart</h4>
            <ul className="items">
                { cart.items.map((item) => ( <CartItem data={item} key={item.productID} id={item.productID} /> )) }
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="checkout-cart">
        <a href="" className="checkout-bag">
          <span className="checkout-bag-badge">4</span>
        </a>
      </div>
    )
  }
}

Cart.contextTypes = {
  store : React.PropTypes.object
}

// Will contain a smart component that dispatches an action to go to the cart/checkout form.
// This component might be composed of a generic <link> 'dumb' component


// Dumb Comonent

const CartItem = ({ id, children }) => {
  return (
    <li className="item">
      <img src="http://placehold.it/100/100" alt="" />
      <p className="name">Item</p>
      <span className="price">$20</span>
      <CartItemLink id={id} />
      {children}
    </li>
  )
}

CartItem.contextTypes = {
  store : React.PropTypes.object
}

CartItem.propTypes = {
  id : React.PropTypes.number.isRequired
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
            console.log(id);
            store.dispatch(actions.updateCartItemQuantity(id, 0))
          }
        }
      >
        Remove it {id}
      </a>
    )
  }
}

CartItemLink.contextTypes = {
  store : React.PropTypes.object
}


export default Cart;
