import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      onClick
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <MovieCard
            key={i}
            film={film}
            clickHandler={onClick}
          />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
