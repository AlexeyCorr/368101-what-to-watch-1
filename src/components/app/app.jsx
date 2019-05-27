import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ActionCreators} from './../../reducer/reducer.js';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';

const App = (props) => {
  const {films, genre, clickFilterHandler} = props;

  return (
    <React.Fragment>
      <Sprite/>
      <MainScreen
        films={films}
        genre={genre}
        clickFilterHandler={clickFilterHandler}
      />
    </React.Fragment>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  })).isRequired,
  genre: PropTypes.string.isRequired,
  clickFilterHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  films: state.films,
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreators.filterItems(genre));
    dispatch(ActionCreators.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
