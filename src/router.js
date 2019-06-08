import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Path from './paths.js';
import MainScreen from './components/main-screen/main-screen.jsx';
import SingInScreen from './components/sing-in-screen/sing-in-screen.jsx';
import FavoritesScreen from './components/favorites-screen/favorites-screen.jsx';

const Router = () => (
  <Switch>
    <Route path={Path.MAIN} exact component={MainScreen}/>
    <Route path={Path.LOGIN} component={SingInScreen}/>
    <Route path={Path.FAVORITES} component={FavoritesScreen}/>
  </Switch>
);

export default Router;
