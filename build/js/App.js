import React from 'react';

var data = [
  {
    "name": "The Blue Sweater",
    "price": 80,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "/img/blue-sweater.jpg"
  },
  {
    "name": "The Grey Sweater",
    "price": 80,
    "details": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "image": "/img/grey-sweater.jpg"
  },
  {
    "name": "The Light Blue Oxford",
    "price": 50,
    "details": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    "image": "/img/light-blue-oxford.jpg"
  },
  {
    "name": "The Navy Chino",
    "price": 50,
    "details": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "/img/navy-chinos.jpg"
  }
];

class Header extends React.Component {
  render() {
    return (
      <header>
       <div className="container">
         <div className="row">
           <div className="col-8 col-off-2">
               <h1><a href="" className="site-logo">Label</a></h1>
           </div>
           <div className="col-2">
             <a href="" className="checkout-bag">
               <span className="checkout-bag-badge">4</span>
             </a>
             <div className="checkout-cart">
               <h4>In Your Cart</h4>
               <ul className="items">
                 <li className="item">
                   <img src="http://placehold.it/100/100" alt="" />
                   <p className="name">Item</p>
                   <span className="price">$20</span>
                   <a href="">Remove</a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col-8 col-off-2">
             <nav>
               <ul className="site-navigation">
                 <li><a href="">All</a></li>
                 <li><a href="">Men</a></li>
                 <li><a href="">Women</a></li>
               </ul>
             </nav>
           </div>
         </div>
       </div>
     </header>
   );
  }
}

class ProductRow extends React.Component {
  constructor() {
    super();
    this.listProducts = this.listProducts.bind(this);
  }
  render() {
    return (
      <section className="content">
        <div className="container">
          <div className="row">
              {this.listProducts()};
          </div>
        </div>
      </section>
    );
  }
  listProducts() {
    return (
      this.props.data.forEach(function(item) {
        <Product data="item" />
      })
    )
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="product">
          <img src="" alt="" />
          <h4 className="product-name">{this.props.name}<span className="price">20</span></h4>
          <a href="" className="product-overlay">View Product Details</a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { app: 'running' };
    this.data = data;
  }
  componentWillMount() {
    console.log('will mount');
  }
  render() {
    console.log('rendered');
    return (
      <div>
        <Header />
        <ProductRow data={this.data} />
      </div>
    );
  }
  componentDidMount() {
    console.log('mounted');
  }
}

export default App;
