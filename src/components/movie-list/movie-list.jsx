import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1
    };
    this._timeout = null;
  }

  render() {
    const {films, onClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <MovieCard
            key={`movie-card-${i}`}
            film={film}
            mouseEnterHandler={() => this._mouseEnter(i)}
            mouseLeaveHandler={() => this._mouseLeave()}
            isPlaying={i === this.state.activePlayer}
            clickHandler={onClick}
          />
        )}
      </div>
    );
  }

  componentWillUnmount() {
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
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieList;
