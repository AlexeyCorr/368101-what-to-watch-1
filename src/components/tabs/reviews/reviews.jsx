import React from 'react';
// import PropTypes from 'prop-types';

const Reviews = () => {

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Text</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>
        </div>

        <div className="movie-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Text</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// Reviews.propTypes = {
//   film: PropTypes.object.isRequired,
// };

export default Reviews;
