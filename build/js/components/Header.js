import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
       <div className="container">
         <div className="row">
           <div className="col-8 col-off-2">
               <h1><a href="" className="site-logo">Label</a></h1>
           </div>
           <Bag />
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

class Bag extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
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
    );
  }
}

export default Header;
