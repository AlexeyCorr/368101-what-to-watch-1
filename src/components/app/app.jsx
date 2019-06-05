import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from './../../reducer/data/data.js';
import Sprite from './../sprite/sprite.jsx';
import MainScreen from './../main-screen/main-screen.jsx';
import {getGenres, getGenre} from './../../reducer/data/selectors.js';
import {getAuthorizationStatus} from './../../reducer/user/selectors.js';
import SingInScreen from './../sing-in-screen/sing-in-screen.jsx';
import {getFilteredArray} from './../../reducer/data/selectors.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showLoginScreen: false,
    };

    this._clickLoginHandler = this._clickLoginHandler.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Sprite/>
        {this._getScreen()}
      </React.Fragment>
    );
  }

  _getScreen() {
    if (!this.state.showLoginScreen) {
      const {
        films,
        genre,
        genres,
        isAuthorization,
        clickFilterHandler
      } = this.props;

      return (
        <MainScreen
          films={films}
          genre={genre}
          genres={genres}
          clickFilterHandler={clickFilterHandler}
          clickLoginHandler={this._clickLoginHandler}
          isAuthorization={isAuthorization}
        />
      );
    }
    return <SingInScreen/>;
  }

  _clickLoginHandler(evt) {
    evt.preventDefault();
    this.setState({
      showLoginScreen: !this.state.showLoginScreen,
    });
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  clickFilterHandler: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: getGenre(state),
  genres: getGenres(state),
  films: getFilteredArray(state),
  isAuthorization: getAuthorizationStatus(state),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
