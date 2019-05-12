import React from 'react';
import PropTypes from 'prop-types';

import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';

const App = (props) => {
  const {films} = props;

  return (
    <React.Fragment>
      <Sprite/>
      <MainScreen
        films={films}
      />
    </React.Fragment>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  })).isRequired
};

export default App;
