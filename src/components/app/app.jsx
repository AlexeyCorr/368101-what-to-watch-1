import React from 'react';
import PropTypes from 'prop-types';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';

const App = (props) => {
  const {movieTitles, onClickTitle} = props;

  return <React.Fragment>
    <Sprite/>
    <MainScreen movieTitles={movieTitles} onClickTitle={onClickTitle}/>
  </React.Fragment>;
};

App.propTypes = {
  movieTitles: PropTypes.array.isRequired,
  onClickTitle: PropTypes.func.isRequired
};

export default App;
