import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-8 col-off-2">
              <h1><a href="" className="site-logo">Label</a></h1>
              <nav>
                <ul className="site-navigation">
                  <HeaderLink filter="ALL">All</HeaderLink>
                  <HeaderLink filter="MEN">Men</HeaderLink>
                  <HeaderLink filter="WOMEN">Women</HeaderLink>
                </ul>
              </nav>
            </div>
          </div>
        </div>
     </header>
   );
  }
}

const HeaderLink = ({ filter, children }) => {
  return (
    <li><a href="" onClick={console.log(filter)}>{children}</a></li>
  )
}

HeaderLink.PropTypes = {
  filter : React.PropTypes.string.isRequired
}

export default Header;
