import React from 'react';
import PropTypes from 'prop-types';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';

const App = (props) => {
  const {movieTitles} = props;

  return <div>
    <Sprite/>
    <MainScreen movieTitles={movieTitles}/>
  </div>;
};

App.propTypes = {
  movieTitles: PropTypes.array.isRequired
};

export default App;
