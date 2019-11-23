//  import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Link } from 'react-router-dom';

import { history } from '$redux/store';
import ViewPageContainer from '../ViewAddress';
import AddPageContainer from '../Add_Address';

const MainContainer = () => (
  <ConnectedRouter history={history}>
    {/* <div className="header">
      <Link to="/">View Addresses</Link>
      <Link to="/add_address">Add Address</Link>
    </div> */}
    <Switch>
      <Route exact path="/" component={ViewPageContainer}/>
      <Route path="/add_address" component={AddPageContainer} />
    </Switch>
  </ConnectedRouter>
);

export default MainContainer;
