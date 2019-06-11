import React from 'react';
import PropTypes from 'prop-types';

import Reviews from './reviews/reviews.jsx';
import Details from './details/details.jsx';
import Overview from './overview/overview.jsx';

const Tabs = ({film}) => {
  return (
    <div class="movie-card__desc">
      <nav class="movie-nav movie-card__nav">
        <ul class="movie-nav__list">
          <li class="movie-nav__item movie-nav__item--active">
            <a href="#" class="movie-nav__link">Overview</a>
          </li>
          <li class="movie-nav__item">
            <a href="#" class="movie-nav__link">Details</a>
          </li>
          <li class="movie-nav__item">
            <a href="#" class="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <Overview film={film}/>
      <Details film={film}/>
      <Reviews film={film}/>

    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
}

export default Tabs;
