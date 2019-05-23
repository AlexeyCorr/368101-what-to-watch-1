import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ActionCreators} from './../../reducer/reducer.js';
import genres from './../../mocks/genres.js';
import Sprite from './../sprite/sprite.jsx';
import GenreList from './../genre-list/genre-list.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import MainScreen from './../main-screen/main-screen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectFilm: {},
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  render() {
    const {films, genre, clickFilterHandler} = this.props;

    return (
      <React.Fragment>
        <Sprite/>
        <MainScreen
          GenreListComponent={
            <GenreList
              genres={genres}
              clickHandler={(genre) => clickFilterHandler(films, genre)}
              activeGenre={genre}
            />}
          MovieListComponent={
            <MovieList
              films={films}
              onClick={this._clickHandler}
            />}
        />
      </React.Fragment>
    );
  }

  _clickHandler(film) {
    this.setState({
      selectFilm: film,
    });
  }

  componentDidUpdate() {
    console.log(this.props.genre);
    console.log(this.props.films);
  }
}


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
  clickFilterHandler: (films, genre) => {
    dispatch(ActionCreators.filterItems(films, genre));
    dispatch(ActionCreators.getGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispachToProps)(App);
