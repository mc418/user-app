import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Detail from './Detail';
import FullUsers from './FullUsers';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path="/users" component={FullUsers} />
          <Route path="/users/:login" render={props => <Detail props={props} />} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
