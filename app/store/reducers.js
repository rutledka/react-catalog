import { combineReducers } from 'redux';
import data from '../data/data';

/*
*
  INITIALSTATE
*
*/

/*
*
  Object {,
    visibilityFilter : 'MEN' || 'WOMEN' || 'ALL',
    productDetails : {
      isActive : true || false,
      productID : 0
    },
    cart :
      isVisible : true || false,
      items : [
        {
          index : 0,
          productID : 0,
          quantity : 2
        },
        {
          index : 1,
          productID : 2,
          quantity : 1
        }
    ],
    products : [
      ...data
    ]
  }
  }
*
*/

const initialState = {
  visibilityFilter : 'ALL',
  productDetails : {
    isActive : false,
    productID : null
  },
  cart : [],
  products : [
    ...data
  ]
}



/*
*
  REDUCERS
*
*/

const productDetails = (state = initialState.productDetails, action) => {
    switch (action.type) {
      case undefined :
        return state;
      case 'SHOW_PRODUCT_DETAILS' :
        return {
          ...state,
          isActive : true,
          productID : action.productID
        }
      case 'HIDE_PRODUCT_DETAILS' :
        return {
          ...state,
          isActive : false,
          productID : null
        }
      default :
        return state;
    }
}

const products = (state = initialState.products, action) => {
  switch (action.type) {
    case undefined :
      return state;
    case 'SUBMIT_PRODUCT_REVIEW' :
      console.log('hitting products reducer');
      return state.map((el, index, array) => {
        if(el.id == action.productID) {
          console.log('calling product()');
          return product(el, action);
        }

        return el;
      });
    default :
      return state;
  }
}

const product = (state = [], action) => {
  console.log('hello from product()');
  switch (action.type) {
    case undefined :
      return state;
    case 'SUBMIT_PRODUCT_REVIEW' :
    console.log('hitting product reducer');
      return {
        ...state,
        reviews : [
          ...state.reviews,
          {
            rating : action.rating,
            reviewerName : action.reviewerName,
            text : action.text
          }
        ]
      }
    default :
      return state;
  }
}

/** state refers to entire cart object **/
const cart = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART' :
        return {
          ...state,
          items : items(state.items, action)
        }
      case 'UPDATE_CART_ITEM_QUANTITY' :
        return {
          ...state,
          items : items(state.items, action)
        }
      case 'TOGGLE_CART_VISIBILITY' :
        return {
          ...state,
          isVisible : !state.isVisible
        }
      default :
        return state;
    }
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART' :
      return [
        ...state,
        {
          productID : action.productID,
          quantity : action.quantity
        }
      ]
    case 'UPDATE_CART_ITEM_QUANTITY' :
      //if quantity is 0, remove the item from array
      return state.map((item, index, array) => {
        if(item.id == action.id) {
          return cartItem(item, action);
        }
        return
      });
    default :
      return state;
  }
}

/** state refers to carItem object within cart array **/
const cartItem = (state = {}, action) => {
  switch (action.type) {
    case undefined :
      return state;
    case 'UPDATE_CART_ITEM_QUANTITY' :
      return {
        ...state,
        quantity : action.quantity
      }
    default :
      return state;
  }
}

/** how do we interact with external data using redux. two states? separate store?
 **/
/** state refers to reviews array  **/
const reviews = (state = initialState.reviews, action) => {
  switch (action.type) {
    case 'SUBMIT_PRODUCT_REVIEW' :
      return [
        ...state,
        {
          rating : action.rating,
          text : action.text
        }
      ]
    default :
      return state;
  }
}

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER' :
      return {
        ...state,
        visibilityFilter : action.filter
      }
    default :
      return state;
  }
}

const store = combineReducers({
  productDetails,
  cart,
  visibilityFilter,
  products
});

export default store;
