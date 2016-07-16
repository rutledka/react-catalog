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

const updateCartItemQuantity = (id, quantity) => {
  return {
    type : 'UPDATE_CART_ITEM_QUANTITY',
    quantity
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
  updateCartItemQuantity
}
