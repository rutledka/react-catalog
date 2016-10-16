import React from 'react';
import actions from '../store/actions';
import _ from 'lodash';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
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
    let cartQuantities = [];
    let cartQuantityTotal;

    state.cart.items.map((item) => {
      cartQuantities = [...cartQuantities, item.quantity];
    });

    cartQuantityTotal = _.sum(cartQuantities);

    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-8 col-off-2">
              <h1><a href="" className="site-logo">Label</a></h1>
              <nav>
                <ul className="site-navigation">
                  <HeaderLink
                    href="#"
                    onHeaderLinkClick={
                      (e) => {
                        e.preventDefault();
                        store.dispatch(actions.setVisibilityFilter("ALL"));
                      }
                    }
                  >
                    All
                  </HeaderLink>
                  <HeaderLink
                    href="#"
                    onHeaderLinkClick={
                      (e) => {
                        e.preventDefault();
                        store.dispatch(actions.setVisibilityFilter("MEN"));
                      }
                    }
                  >
                    Men
                  </HeaderLink>
                  <HeaderLink
                    href="#"
                    onHeaderLinkClick={
                      (e) => {
                        e.preventDefault();
                        store.dispatch(actions.setVisibilityFilter("WOMEN"));
                      }
                    }
                  >
                    Women
                  </HeaderLink>
                </ul>
              </nav>
            </div>
            <div className="col-2">
              <a href="#"
                className="checkout-bag"
                onClick ={
                  (e) => {
                    e.preventDefault();
                    store.dispatch(actions.toggleCartVisibility());
                  }
                }
                >
                <span className="checkout-bag-badge">{ cartQuantityTotal || 0 }</span>
              </a>
            </div>
          </div>
        </div>
     </header>
   );
  }
}

Header.contextTypes = {
  store: React.PropTypes.object
}

const HeaderLink = ({ href, children, onHeaderLinkClick }) => {
  return (
    <li>
      <a href={ href }
        onClick={
          (e) => {
            onHeaderLinkClick(e);
          }
        }
        >
        {children}
      </a>
    </li>
  )
}

HeaderLink.PropTypes = {
  filter : React.PropTypes.string.isRequired
}

export default Header;
