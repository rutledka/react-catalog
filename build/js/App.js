import React from 'react';
import Header from './Header';

let data = [
  {
    'id' : 0,
    "name": "The Blue Sweater",
    "price": 80,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "/img/blue-sweater.jpg"
  },
  {
    'id' : 1,
    "name": "The Grey Sweater",
    "price": 80,
    "details": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "image": "/img/grey-sweater.jpg"
  },
  {
    'id' : 2,
    "name": "The Light Blue Oxford",
    "price": 50,
    "details": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    "image": "/img/light-blue-oxford.jpg"
  },
  {
    'id' : 3,
    "name": "The Navy Chino",
    "price": 50,
    "details": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "/img/navy-chinos.jpg"
  }
];

class ProductRow extends React.Component {
  constructor() {
    super();
    //this.addProductToCart = this.addProductToCart.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
  }
  render() {
    let clickFunction = this.viewDetails;
    let productNodes = this.props.data.map(function(product) {
      return (
        <Product data={product} key={product.id} viewDetails={clickFunction}/>
      );
    });
    return (
      <section className="content">
        <div className="container">
          <div className="row">
              {productNodes}
              {/*<Product data={this.props.data[0]} key={this.props.data.name} addProductToCart={this.addProductToCart} />*/}
          </div>
        </div>
      </section>
    );
  }
  viewDetails(object) {
    this.props.viewDetails(object);
    console.log('view details in productRow');
  }
  // addProductToCart(object) {
  //   console.log('this is in a function in the ProductRow component');
  //   this.props.addProductToCart(object);
  // }
}

class Product extends React.Component {
  constructor() {
    super();
    //this.addToCart = this.addToCart.bind(this);
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

class ProductOverlay extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.dismissOverlay = this.dismissOverlay.bind(this);
  }
  render() {
    return (
      <div className="product-detail-overlay" data-state={this.props.isActive} onClick={this.dismissOverlay}>
        <div className="product-details">
          <h3>{this.props.data.name}</h3>
          <img src={this.props.data.image} />
          <p className="description">{this.props.data.details}</p>
          <a href="" onClick={this.addToCart}>Add To Cart</a>
        </div>
      </div>
    );
  }
  addToCart() {
    console.log('add to cart from product overlay');
  }
  dismissOverlay() {
    this.props.dismissOverlay();
    console.log('dismissing overlay');
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productOverlay: 'inactive',
      overlayData: {
        id: '',
        name: '',
        price: '',
        details: '',
        image: ''
      }
    };
    this.data = data;
    this.addProductToCart = this.addProductToCart.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.dismissOverlay = this.dismissOverlay.bind(this);
  }
  addProductToCart(object) {
    console.log('this is a function in the App component');
    console.log(object);
  }
  componentWillMount() {
    console.log('will mount');
  }
  render() {
    console.log('rendered');
    return (
      <div>
        <Header />
        <ProductRow data={this.data} viewDetails={this.viewDetails} />
        <ProductOverlay isActive={this.state.productOverlay} dismissOverlay={this.dismissOverlay} data={this.state.overlayData}/>
      </div>
    );
  }
  componentDidMount() {
    console.log('mounted');
  }
  viewDetails(object) {
    this.setState({
      productOverlay: 'active',
      overlayData : object
    });
    console.log(object);
    console.log('view details in App');

  }
  dismissOverlay() {
    this.setState({
      productOverlay: 'inactive'
    });
  }
}

export default App;
