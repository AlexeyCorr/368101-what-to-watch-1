import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({film}) => {
  <React.Fragment>
    <div class="movie-card__reviews movie-card__row">
      <div class="movie-card__reviews-col">
        <div class="review">
          <blockquote class="review__quote">
            <p class="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.</p>

            <footer class="review__details">
              <cite class="review__author">Kate Muir</cite>
              <time class="review__date" datetime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div class="review__rating">8,9</div>
        </div>
      </div>

      <div class="movie-card__reviews-col">
        <div class="review">
          <blockquote class="review__quote">
            <p class="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.</p>

            <footer class="review__details">
              <cite class="review__author">Kate Muir</cite>
              <time class="review__date" datetime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div class="review__rating">8,9</div>
        </div>
      </div>
    </div>
  </React.Fragment>
};

Reviews.propTypes = {
  films: PropTypes.object.isRequired,
};

export default Reviews;
