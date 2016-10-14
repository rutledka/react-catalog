import React from 'react';
import action from '../store/actions';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { store } = this.context;
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
                        store.dispatch(action.setVisibilityFilter("ALL"));
                        console.log(store.getState());
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
                        store.dispatch(action.setVisibilityFilter("MEN"));
                        console.log(store.getState());
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
                        store.dispatch(action.setVisibilityFilter("WOMEN"));
                        console.log(store.getState());
                      }
                    }
                  >
                    Women
                  </HeaderLink>
                </ul>
              </nav>
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
      <a
        href={ href }
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
