import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {
    film,
    clickHandler,
  } = props;

  const {title, link, picture} = film;

  return <article className="small-movie-card catalog__movies-card">
    <button className="small-movie-card__play-btn" type="button">Play</button>
    <div className="small-movie-card__image">
      <img src={picture}
        alt={title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a
        className="small-movie-card__link"
        onClick={clickHandler}
        href={link}
      >
        {title}
      </a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default MovieCard;
