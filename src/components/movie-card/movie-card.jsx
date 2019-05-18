import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from './../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {
    film,
    mouseEnterHandler,
    mouseLeaveHandler,
    clickHandler,
    isPlaying,
  } = props;
  const {title, link, picture, src} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        picture={picture}
        src={src}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={link}
          onClick={(evt) => {
            evt.preventDefault();
            clickHandler(film);
          }}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    src: PropTypes.array.isRequired,
  }).isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MovieCard;
