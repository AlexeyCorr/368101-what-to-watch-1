import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';
import ShowMore from './../show-more/show-more.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
      showFilms: 20,
    };
    this._timeout = null;
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
  }

  render() {
    const {films} = this.props;
    const {showFilms} = this.state;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {[...films].slice(0, showFilms).map((film, i) =>
            <MovieCard
              key={`movie-card-${i}`}
              film={film}
              mouseEnterHandler={() => this._mouseEnter(i)}
              mouseLeaveHandler={() => this._mouseLeave()}
              isPlaying={i === this.state.activePlayer}
            />
          )}
        </div>
        <ShowMore clickHandler={this._clickHandler} isShow={showFilms < films.length}/>
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    window.clearTimeout(this._timeout);
    this._timeout = null;
  }

  _mouseEnter(index) {
    const timeoutID = window.setTimeout(() => {
      this.setState({
        activePlayer: this.state.activePlayer === index ? -1 : index
      });
    }, 1000);
    this._timeout = timeoutID;
  }

  _mouseLeave() {
    this.setState({activePlayer: -1});
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  }

  _clickHandler() {
    const {showFilms} = this.state;
    const {films} = this.props;

    this.setState({
      showFilms: showFilms < films.length ? showFilms + 20 : films.length,
    });
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
