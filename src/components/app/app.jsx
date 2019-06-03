import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import {ActionCreator} from './../../reducer/index.js';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';
import {server2ResultMapper} from './../../util.js';
// import {getAuthorizationStatus} from './../../reducer/user/selectors.js';
import {getFilms, getGenre} from './../../reducer/data/selectors.js';
// import SingInScreen from './../sing-in-screen/sing-in-screen.jsx';
import {getFilteredArray} from './../../reducer/data/selectors.js';

const App = (props) => {
  const {films, genre, clickFilterHandler} = props;
  return (
    <React.Fragment>
      <Sprite/>
      {/* <SingInScreen/> */}
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
  genre: getGenre(state),
  films: getFilms(state).map((data) => server2ResultMapper(data)),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: () => {
    dispatch(getFilteredArray);
    // dispatch(ActionCreator.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
