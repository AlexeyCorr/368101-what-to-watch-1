import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({comments}) => {
  const fotmatDate = (date) => {
    const newDate = new Date(date);
    const options = {year: `numeric`, month: `long`, day: `numeric`};

    return newDate.toLocaleDateString(`en-US`, options);
  };

  if (!comments) {
    return null;
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.slice(0, comments.length / 2).map((it) => {
          return (
            <div className="review" key={it.id}>
              <blockquote className="review__quote">
                <p className="review__text">{it.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{it.user.name}</cite>
                  <time className="review__date" dateTime={fotmatDate(it.date)}>{fotmatDate(it.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{it.rating}</div>
            </div>
          );
        })}
      </div>

      <div className="movie-card__reviews-col">
        {comments.slice(comments.length / 2, comments.length).map((it) => {
          return (
            <div className="review" key={it.id}>
              <blockquote className="review__quote">
                <p className="review__text">{it.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{it.user.name}</cite>
                  <time className="review__date" dateTime={fotmatDate(it.date)}>{fotmatDate(it.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{it.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  comments: PropTypes.array,
};

export default Reviews;
