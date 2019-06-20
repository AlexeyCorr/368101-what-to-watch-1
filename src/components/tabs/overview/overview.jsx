import React from 'react';
import PropTypes from 'prop-types';

const RatingType = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const Overview = ({film}) => {
  const getRating = (rating) => {
    if (rating === 10) {
      return RatingType.AWESOME;
    } else if (rating > 8) {
      return RatingType.VERY_GOOD;
    } else if (rating > 5) {
      return RatingType.GOOD;
    } else if (rating > 3) {
      return RatingType.NORMAL;
    } else {
      return RatingType.BAD;
    }
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(film.rating)}</span>
          <span className="movie-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.map((it) => `${it} ${film.starring.length + 1 && `, `}`)}</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Overview;
