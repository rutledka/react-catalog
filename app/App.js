import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ProductOverlay from './components/ProductOverlay';
import data from './data/data';

const ProductRow = ({data, viewDetails}) => {
  return (
    <section className="content">
      <div className="container">
        <div className="row">
            { data.map((product) => ( <Product data={product} key={product.id} viewDetails={viewDetails}/> ) ) }
        </div>
      </div>
    </section>
  )
}

ProductRow.propTypes = {
  data: React.PropTypes.array.isRequired,
  viewDetails: React.PropTypes.func.isRequired
}

class App extends React.Component {
  constructor() {
    super();
    // when using default JS classes to extend React.Component we declare state in the constructor() function
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
  // getInitialState() only works with React.createClass() not when using default JS classes
  // getInitialState() {
  //   return {
  //     productOverlay: 'inactive',
  //     overlayData: {
  //       id: '',
  //       name: '',
  //       price: '',
  //       details: '',
  //       image: ''
  //     }
  //   }
  // }
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
