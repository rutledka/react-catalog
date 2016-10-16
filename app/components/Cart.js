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

    let cartPrices = [];
    let cartTotal;

    cart.items.map((item) => {
      console.dir(state.products[item.productID]);
      let subtotal = state.products[item.productID].price * item.quantity;
      cartPrices = [...cartPrices, subtotal];
      console.log(item);

    });
    console.log(cartPrices);
    cartTotal = _.sum(cartPrices);
    console.log(cartTotal);

    if ( cart.items.length ) {
      return (
        <div className="page-overlay cart"
          data-active={cart.isVisible}
          >
          <div className="page-overlay-interior">
            <a href="#"
              onClick={
                (e) => {
                  e.preventDefault();
                  store.dispatch(actions.toggleCartVisibility());
                }
              }
            >Close</a>
            <h4>In Your Bag</h4>
            <ul className="items">
                {
                  cart.items.map(
                    (item) => {
                      return <CartItem data={state.products[item.productID]} quantity={item.quantity} key={item.productID} id={item.productID} />
                    }
                  )
                }
            </ul>
            <p>TOTAL: ${ cartTotal.toFixed(2) }</p>
          </div>
        </div>
      )
    }
    return (
      <div className="page-overlay cart"
        data-active={cart.isVisible}
        >
        <div className="page-overlay-interior">
          <a href="#"
            onClick={
              (e) => {
                e.preventDefault();
                store.dispatch(actions.toggleCartVisibility());
              }
            }
          >Close</a>
          <h4>In Your Bag</h4>
        </div>
      </div>
    )
  }
}

Cart.contextTypes = {
  store : React.PropTypes.object
}


const CartItem = ({ data, id, quantity, children }) => {
  return (
    <li className="item">
      <img src="http://placehold.it/100/100" alt="" />
      <p className="name">{ data.name }</p>
      <span className="price">PRICE: ${ data.price }</span><br/>
      <span className="quantity">QUANTITY: { quantity }</span>
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
        Remove From Bag
      </a>
    )
  }
}

CartItemLink.contextTypes = {
  store : React.PropTypes.object
}


export default Cart;
