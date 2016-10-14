import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';

import reducers from './store/reducers';
//import action from './store/actions';
let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


// console.log('/* initial state */')
//
// console.dir(store.getState());
//
// console.log('/* showing product details */');
//
// store.dispatch(action.showProductDetails(1));
// /*store.dispatch({
//   type : 'SHOW_PRODUCT_DETAILS',
//   productID : 1
// });*/
//
// console.dir(store.getState());
//
// console.log('/* leaving product review */');
//
// store.dispatch(action.submitProductReview(
//   1,
//   5,
//   'Jimmy Dean',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
// ));
//
// // store.dispatch({
// //   type : 'SUBMIT_PRODUCT_REVIEW',
// //   productID : 1,
// //   rating : 5,
// //   reviewerName : 'Jimmy Dean',
// //   text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
// // });
//
// console.dir(store.getState());
//
// console.log('/* Adding item to cart */');
//
// store.dispatch(action.addItemToCart(1, 1));
// // store.dispatch({
// //   type : 'ADD_ITEM_TO_CART',
// //   index : 0,
// //   productID : 1,
// //   quantity : 1
// // });
//
// console.dir(store.getState());
//
// console.log('/* Updating cart item quantity */');
//
// store.dispatch(action.updateCartItemQuantity(1, 3));
// // store.dispatch({
// //   type : 'UPDATE_CART_ITEM_QUANTITY',
// //   productID : 1,
// //   quantity : 3
// // });
//
// console.dir(store.getState());
//
// console.log('/* hiding product details */');
//
// store.dispatch(action.hideProductDetails());
// // store.dispatch({
// //   type : 'HIDE_PRODUCT_DETAILS'
// // });
//
// console.dir(store.getState());
//
// console.log('/* changing visibility filter */');
//
// store.dispatch(action.setVisibilityFilter('MEN'));
// // store.dispatch({
// //   type : 'SET_VISIBILITY_FILTER',
// //   filter : 'MEN'
// // });
//
// console.dir(store.getState());
//
// console.log('/* showing product details */');
//
// store.dispatch(action.showProductDetails(2));
// // store.dispatch({
// //   type : 'SHOW_PRODUCT_DETAILS',
// //   productID : 2
// // });
//
// console.dir(store.getState());
//
// console.log('/* Adding item to cart */');
//
// store.dispatch(action.addItemToCart(2, 2));
// // store.dispatch({
// //   type : 'ADD_ITEM_TO_CART',
// //   productID : 2,
// //   quantity : 2
// // });
//
// console.dir(store.getState());
//
// console.log('/* hiding product details */');
//
// store.dispatch(action.hideProductDetails());
// // store.dispatch({
// //   type : 'HIDE_PRODUCT_DETAILS'
// // });
//
// console.dir(store.getState());
//
// console.log('/* Updating cart item quantity */');
//
// store.dispatch(action.updateCartItemQuantity(1, 0));
//
// console.dir(store.getState());
//
// console.log('/* toggle cart visibility - on */');
//
// store.dispatch(action.toggleCartVisibility());
//
// console.dir(store.getState());
//
// console.log('/* toggle cart visibility - off */');
//
// store.dispatch(action.toggleCartVisibility());
//
// console.dir(store.getState());
