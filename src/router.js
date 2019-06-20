import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Path from './paths.js';
import MainScreen from './components/main-screen/main-screen.jsx';
import SingInScreen from './components/sing-in-screen/sing-in-screen.jsx';
import FavoritesScreen from './components/favorites-screen/favorites-screen.jsx';
import MovieDetailsScreen from './components/movie-details-screen/movie-details-screen.jsx';
import MovieScreen from './components/movie-screen/movie-screen.jsx';
import ReviewScreen from './components/review-screen/review-screen.jsx';

const Router = () => (
  <Switch>
    <Route path={Path.main()} exact component={MainScreen}/>
    <Route path={Path.login()} component={SingInScreen}/>
    <Route path={Path.favorites()} component={FavoritesScreen}/>
    <Route path={Path.film(`:id`)} component={MovieDetailsScreen}/>
    <Route path={Path.showFilm(`:id`)} component={MovieScreen}/>
    <Route path={Path.review(`:id`)} component={ReviewScreen}/>
  </Switch>
);

export default Router;
