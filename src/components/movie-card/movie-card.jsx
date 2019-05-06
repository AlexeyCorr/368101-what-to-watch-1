import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {title, onClickTitle} = props;

  return <article className="small-movie-card catalog__movies-card">
    <button className="small-movie-card__play-btn" type="button">Play</button>
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
        alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a
        className="small-movie-card__link"
        onClick={onClickTitle}
        href="movie-page.html"
      >
        {title}
      </a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClickTitle: PropTypes.func.isRequired
};

export default MovieCard;
