/** ACTIONS **/

/**
 *  action creators
**/

const showProductDetails = (productID) => {
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

const submitProductReview = (productID, rating, reviewerName, text) => {
  return {
    type : 'SUBMIT_PRODUCT_REVIEW',
    productID,
    rating,
    reviewerName,
    text
  }

}

const addItemToCart = (productID, quantity) => {
  return {
    type : 'ADD_ITEM_TO_CART',
    productID,
    quantity
  }
}

const updateCartItemQuantity = (productID, quantity) => {
  return {
    type : 'UPDATE_CART_ITEM_QUANTITY',
    productID,
    quantity
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type : 'SET_VISIBILITY_FILTER',
    filter,
  }
}

const toggleCartVisibility = () => {
  return {
    type : 'TOGGLE_CART_VISIBILITY'
  }
}

export default {
  showProductDetails,
  hideProductDetails,
  submitProductReview,
  addItemToCart,
  updateCartItemQuantity,
  setVisibilityFilter,
  toggleCartVisibility
}
