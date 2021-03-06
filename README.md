## Objective
Create a working react + redux app using best standards. Component functionality will adhere to the redux practice of separating component concerns by using presentational and container components.

## Functionality
show/hide product details, leave product review, add items to cart, update cart quantities, filter products by type.

## TODOS

* Outline redux store: state, actions, and reducers. *DONE*
* Reorganize react components into a UI hierarchy similar to shape of root state object. Separate into presentational and container components ([more on that here](http://redux.js.org/docs/basics/UsageWithReact.html)). *PENDING*
* Use [react-redux](https://github.com/reactjs/react-redux) bindings between components.
* configure [gulp task](https://webpack.github.io/docs/usage-with-gulp.html) to run webpack and webpack-dev-server
* Update styles so bag icon is in sidebar stuck to the right side of screen on desktop. Slides out when active.
* Make modal white full screen so you can't see page behind it.
* Using [react-router](https://github.com/reactjs/react-router), create a Checkout view '/checkout' with checkout form.
* Checkout Form Functionality: MARK shipping address same as billing address (duplicates form values in shipping fields, makes shipping fields uneditable and greyed out). INPUT value for coupon code, checks if coupon is valid, if TRUE discounts cart, FALSE shows an error.
* Save and retrieve state to/from localStorage
