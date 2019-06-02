import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ActionCreators} from './../../reducer/reducer.js';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';
import {Server2ResultMapper} from './../../util.js';

const App = (props) => {
  const {films, genre, clickFilterHandler} = props;

  console.log(films);

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
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  clickFilterHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  films: state.films.map((data) => Server2ResultMapper(data)),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreators.filterItems(genre));
    dispatch(ActionCreators.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
