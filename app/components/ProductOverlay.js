import React from 'react';
import actions from '../store/actions';
import _ from 'lodash';

class ProductOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quantity : null
    }
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(e) {
    this.setState({
      quantity : e.target.value
    });
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const data = _.find(state.products, [ 'id', state.productDetails.productID ]);
    if( typeof data === 'object' ) {
      return (
        <div className="product-detail-overlay"
          data-active={state.productDetails.isActive}
          >
          <div className="product-details">
            <a href="#"
              onClick={
                (e) => {
                  e.preventDefault();
                  store.dispatch(actions.hideProductDetails());
                }
              }
            >Close</a>
            <h3>{ data.name }</h3>
            <img src={ data.image } />
            <p><strong>Price: </strong>{ data.price }</p>
            <input type="number"
              onChange={this.handleChange}
              ref="quantityInput"
            />
            <a href="#"
              onClick={
                (e) => {
                  e.preventDefault();
                  this.refs.quantityInput = '';
                  store.dispatch(actions.addItemToCart(data.id, parseInt(this.state.quantity)));
                }
              }
            >Add To Cart</a>
            <p className="description">{ data.details }</p>
            <Reviews reviews={ data.reviews }/>
          </div>
        </div>
      );
    }
    return (
      <div className="product-detail-overlay"
        data-active={state.productDetails.isActive}
      >
      </div>
    );
  }
}

ProductOverlay.contextTypes = {
  store: React.PropTypes.object
}


const Reviews = ({ reviews }) => {
  return (
    <ul>
      {
        reviews.map(
          (review, index) => {
            return <Review data={review} key={index} />
          }
        )
      }
    </ul>
  )
}

Reviews.propTypes = {
  reviews : React.PropTypes.array
}

const Review = ({ data }) => {
  return (
    <li>
      <p>Rating: { data.rating } by { data.reviewerName }</p>
      <p>{ data.text }</p>
    </li>
  )
}

Review.propTypes = {
  data : React.PropTypes.object
}

export default ProductOverlay;
