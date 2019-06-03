import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from './../../reducer/data/data.js';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';
// import {getAuthorizationStatus} from './../../reducer/user/selectors.js';
import {getGenres, getGenre} from './../../reducer/data/selectors.js';
// import SingInScreen from './../sing-in-screen/sing-in-screen.jsx';
import {getFilteredArray} from './../../reducer/data/selectors.js';

const App = (props) => {
  const {films, genre, genres, clickFilterHandler} = props;

  return (
    <React.Fragment>
      <Sprite/>
      {/* <SingInScreen/> */}
      <MainScreen
        films={films}
        genre={genre}
        genres={genres}
        clickFilterHandler={clickFilterHandler}
      />
    </React.Fragment>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  clickFilterHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: getGenre(state),
  genres: getGenres(state),
  films: getFilteredArray(state),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
