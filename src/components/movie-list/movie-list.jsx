import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1
    };
  }

  render() {
    const {films, onClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <MovieCard
            key={`movie-card-${i}`}
            film={film}
            mouseEnterHandler={() => this.setState({
              activePlayer: this.state.activePlayer === i ? -1 : i
            })}
            mouseLeaveHandler={() => this.setState({
              activePlayer: -1
            })}
            isPlaying={i === this.state.activePlayer}
            clickHandler={onClick}
          />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieList;
