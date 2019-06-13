import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';
import VideoPlayer from './../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {
    film,
    mouseEnterHandler,
    mouseLeaveHandler,
    isPlaying,
  } = props;

  const {name, previewImage, previewVideoLink, id} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        picture={previewImage}
        src={previewVideoLink}
      />
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${Path.FILM}${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
