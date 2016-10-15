import React from 'react';
import actions from '../store/actions';

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
                    return  (
                      <Product
                        data={product}
                        key={product.id}
                        onProductLinkClick={
                          (e) => {
                            e.preventDefault();
                            store.dispatch(actions.showProductDetails(product.id));
                            console.dir(store.getState());
                          }
                        }
                      />
                    )
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


const Product = ({ data, children, onProductLinkClick }) => {
  return (
    <div className="col-4">
      <div className="product">
        <img src={data.image} alt="" />
        <h4 className="product-name">{data.name} - <span className="price">${data.price}</span></h4>
        <a href="#"
          className="product-overlay"
          onClick={
            (e) => {
              onProductLinkClick(e);
            }
          }
        >
          View Product Details {children}
        </a>
      </div>
    </div>
  )
}

Product.propTypes = {
  data: React.PropTypes.object.isRequired
}




export default ProductRow;
