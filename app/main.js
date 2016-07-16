import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

import reducers from './store/reducers';

ReactDOM.render(<App />, document.getElementById('app'));

let store = createStore(reducers);

console.dir(store.getState());

console.log('/* showing product details */');

store.dispatch({
  type : 'SHOW_PRODUCT_DETAILS',
  productID : 1
});

console.dir(store.getState());

console.log('/* leaving product review */');

store.dispatch({
  type : 'SUBMIT_PRODUCT_REVIEW',
  productID : 1,
  rating : 5,
  reviewerName : 'Jimmy Dean',
  text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
});

console.dir(store.getState());

console.log('/* Adding item to cart */');

store.dispatch({
  type : 'ADD_ITEM_TO_CART',
  index : 0,
  productID : 1,
  quantity : 1
});

console.dir(store.getState());

console.log('/* Updating cart item quantity */');

store.dispatch({
  type : 'UPDATE_CART_ITEM_QUANTITY',
  productID : 1,
  quantity : 3
});

console.dir(store.getState());

console.log('/* hiding product details */');

store.dispatch({
  type : 'HIDE_PRODUCT_DETAILS'
});

console.dir(store.getState());
