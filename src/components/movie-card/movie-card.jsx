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

  const {title, videoLink, previewImage, previewLink} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        picture={previewImage}
        src={previewLink}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={videoLink}
          onClick={(evt) => {
            evt.preventDefault();
            clickHandler(film.title);
          }}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
};

export default MovieCard;
