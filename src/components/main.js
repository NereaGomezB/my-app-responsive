import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Signin from '../views/SignIn';

function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signin' component={Signin}></Route>
    </Switch>
  );
}

export default Main;