import { combineReducers } from 'redux';
import products from '../data/data';

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
          reviews : [
            {
              rating: 4,

            }
          ]
        },
        {
          index : 1,
          productID : 2,
          quantity : 1
        }
    ],
    products : {
      ...products
    }
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
  cart : []
}




/*
*
  REDUCERS
*
*/

const productDetails = (state, action) => {
    switch (action.type) {
      case 'SHOW_PRODUCT_DETAILS' :
        return {
          ...state,
          productDetails: {
            isActive : true,
            productIndex : action.id
          }
        }
      case 'HIDE_PRODUCT_DETAILS' :
        return {
          ...state,
          productDetails: {
            isActive : false,
            productIndex : null
          }
        }
      case 'SUBMIT_PRODUCT_REVIEW' :
        return {
          ...state,
          reviews(state, action)
        }
      default :
        return state;
    }
}

/** state refers to entire cart object **/
const cart = (state = [], array) => {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART' :
        return {
          ...state,
          cartItem()
        }
      case 'UPDATE_CART_ITEM_QUANTITY' :
      //if quantity is 0, remove the item from array
        return state
      default :
        return state;
    }
}

/** state refers to carItem object within cart array **/
const cartItem (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART' :
      return {
        ...state,
        cartItem
      }
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
const reviews => {
  switch (action.type) {
    case 'SUBMIT_PRODUCT_REVIEW' :
      return {
        ...state,
        {
          rating : action.rating,
          text : action.text
        }
      }
    default :
      return state;
  }
}

const store = combineReducers({
  productDetails,
  cart,
})

/** ACTIONS **/

const showProductDetails (productID) => {
  return {
    type : 'SHOW_PRODUCT_DETAILS',
    productID
  }
}

const hideProductDetails = () => {
  return {
    type : 'HIDE_PRODUCT_DETAILS'
  }
}

const submitProductReview = (productID, rating, text) => {
  return {
    type : 'SUBMIT_PRODUCT_REVIEW',
    productID,
    rating,
    text
  }

}

const addItemToCart = (id, productID, quantity) => {
  return {
    type : 'ADD_ITEM_TO_CART',
    productID,
    quantity
  }
}

const updateCartItemQuantity (id, quantity) => {
  return {
    type : 'UPDATE_CART_ITEM_QUANTITY',
    quantity
  }
}
