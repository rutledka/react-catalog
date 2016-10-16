import React from 'react';
import actions from '../store/actions';
import _ from 'lodash';

class ProductOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quantity : null,
      reviewForm : {
        rating : null,
        name : '',
        review : ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.onReviewSubmit = this.onReviewSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
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
  handleRatingChange(e) {
    this.setState({
      reviewForm : {
        ...this.state.reviewForm,
        rating: e.target.value
      }
    })
  }
  handleNameChange(e) {
    this.setState({
      reviewForm : {
        ...this.state.reviewForm,
        name: e.target.value
      }
    })
  }
  handleReviewChange(e) {
    this.setState({
      reviewForm : {
        ...this.state.reviewForm,
        review: e.target.value
      }
    })
  }
  onReviewSubmit(e){
    const { store } = this.context;
    const state = store.getState();
    e.preventDefault();
    let { rating, name, review } = this.refs;
    console.log(rating, name, review);
    store.dispatch(actions.submitProductReview(state.productDetails.productID, rating.value, name.value, review.value));
    rating.value = '';
    name.value = '';
    review.value = '';
    console.dir(e);
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const data = _.find(state.products, [ 'id', state.productDetails.productID ]);
    if( typeof data === 'object' ) {
      return (
        <div className="page-overlay product-details"
          data-active={state.productDetails.isActive}
          >
          <div className="page-overlay-interior">
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
                  this.refs.quantityInput.value = '';
                  store.dispatch(
                    actions.addItemToCart(
                      data.id,
                      parseInt(this.state.quantity)
                    )
                  );

                  store.dispatch(actions.hideProductDetails());
                }
              }
            >Add To Cart</a>
            <p className="description">{ data.details }</p>
            <Reviews reviews={ data.reviews }/>

            <form ref="form"
              onSubmit={(e) => {
                console.log('submitting form');
                this.onReviewSubmit(e);
              }}
            >
              <h5>Leave a Review</h5>
              <div className="form-group">
                <label htmlFor="input-rating">Rating</label>
                <select id="input-rating"
                  className="select"
                  ref="rating"
                  onChange={this.handleRatingChange}
                >
                  <option></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="input-name">Your Name</label>
                <input id="input-name"
                  type="text"
                  className="input"
                  ref="name"
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-review">Your Review</label>
                <textarea id="input-review"
                  ref="review"
                  onChange={this.handleReviewChange}
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
            <br/>
            <br/>
          </div>
        </div>
      );
    }
    return (
      <div className="page-overlay product-details"
        data-active={state.productDetails.isActive}
        >
        <div className="page-overlay-interior">
          <a href="#"
            onClick={
              (e) => {
                e.preventDefault();
                store.dispatch(actions.hideProductDetails());
              }
            }
          >Close</a>
        </div>
      </div>
    )
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
