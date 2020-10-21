import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='users' />
          </Route>
          <Route exact path='/users' component={Users} />
          <Route exact path='/userdetail/:id' component={UserDetail} />
        </Switch>
      </Router>
  );
}

export default App;
