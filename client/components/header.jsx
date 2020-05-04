import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeView from './homeview';
import ShopView from './shopview';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const titleStyle = {
      color: 'darkgreen',
      fontStyle: 'italic'
    };
    return (
      <>
        <Router>
          <div>
            <nav className='navbar navbar-light bg-light'>
              <div className="row d-flex">
                <ul>
                  <Link to="/homeview"><h2 style={titleStyle}>HomeView</h2></Link>
                </ul>
                <ul>
                  <Link to="/shopview"><h2 style={titleStyle}>ShopView</h2></Link>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route exact path='/shopview'
                render={props =>
                  <ShopView
                    {...props} />} />

              <Route exact path='/homeview'
                render={props =>
                  <HomeView
                    {...props} />} />

            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default Header;
