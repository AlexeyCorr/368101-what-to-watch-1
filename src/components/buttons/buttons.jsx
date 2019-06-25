import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';

const Buttons = (props) => {
  const {film, user, clickHandler, isReview} = props;

  return (
    <div className="movie-card__buttons">
      <Link
        className="btn btn--play movie-card__button"
        to={Path.showFilm(film.id)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {user.id && <React.Fragment>
        <button
          className="btn btn--list movie-card__button"
          type="button"
          style={{display: `${user.id ? `block` : `none`}`}}
          onClick={clickHandler}
        >
          {film.isFavorite ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use href="#in-list"/>
            </svg>
          ) : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use href="#add"/>
            </svg>
          )}
          <span>My list</span>
        </button>
        {isReview && <Link
          style={{display: `${user.id ? `block` : `none`}`}}
          to={Path.review(film.id)}
          className="btn movie-card__button"
        >
          Add review
        </Link>}
      </React.Fragment>}
    </div>
  );
};

Buttons.defaultProps = {
  isReview: false,
};

Buttons.propTypes = {
  film: PropTypes.object.isRequired,
  isReview: PropTypes.bool,
  user: PropTypes.object,
  clickHandler: PropTypes.func,
};

export default Buttons;
