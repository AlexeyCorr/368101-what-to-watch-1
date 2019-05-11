import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  render() {
    const {
      films,
      onClick
    } = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, i) =>
        <MovieCard
          key={i}
          film={film}
          clickHandler={onClick}
        />
      )}
    </div>;
  }
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
