import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    this.viewDetails = this.viewDetails.bind(this);
  }
  render() {
    return (
      <div className="col-4">
        <div className="product">
          <img src={this.props.data.image} alt="" />
          <h4 className="product-name">{this.props.data.name} - <span className="price">${this.props.data.price}</span></h4>
          <a href="" className="product-overlay" onClick={this.viewDetails}>View Product Details</a>
        </div>
      </div>
    );
  }
  // addToCart(e) {
  //   e.preventDefault();
  //   console.log('this is in a function in the product component');
  //   this.props.addProductToCart({'name': this.props.data.name});
  // }
  viewDetails(e) {
    e.preventDefault();
    this.props.viewDetails(this.props.data);
    console.log('view details in product');
  }
}

Product.propTypes = {
  data: React.PropTypes.object.isRequired,
  viewDetails: React.PropTypes.func.isRequired
}


class ProductRow extends React.Component {
  constructor() {
    super();
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
    console.log(store.getState());
    return (
      <section className="content">
        <div className="container">
          <div className="row">
            {
                state.products.map((product) => {
                  if( state.visibilityFilter == "ALL" ) {
                    return  <Product data={product} key={product.id} viewDetails={this.props.viewDetails}/>;
                  } else if ( product.visibility_filter == state.visibilityFilter ) {
                    return  <Product data={product} key={product.id} viewDetails={this.props.viewDetails}/>;
                  }
                  return;
                })
            }
          </div>
        </div>
      </section>
    )
  }
}

ProductRow.contextTypes = {
  store: React.PropTypes.object
}

ProductRow.propTypes = {
  data: React.PropTypes.array.isRequired,
  viewDetails: React.PropTypes.func.isRequired
}

export default ProductRow;
