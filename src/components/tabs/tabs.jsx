import React from 'react';
import PropTypes from 'prop-types';

import Reviews from './reviews/reviews.jsx';
import Details from './details/details.jsx';
import Overview from './overview/overview.jsx';

const DEFAULT_TAB = `Overview`;

const Tabs = ({film, comments, activeItem, clickHandler}) => {
  const showTab = (activeTab) => {
    switch (activeTab) {
      case `Overview`:
        return <Overview film={film}/>;
      case `Details`:
        return <Details film={film}/>;
      case `Reviews`:
        return <Reviews comments={comments}/>;
    }
    return `Choose tab is not defined`;
  };
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {[`Overview`, `Details`, `Reviews`].map((tab, i) => {
            return (
              <li
                className={`movie-nav__item ${activeItem === tab ? `movie-nav__item--active` : ``}`}
                key={`tab-${i}`}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    clickHandler(tab);
                  }}
                >{tab}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {showTab(activeItem)}

    </div>
  );
};

Tabs.defaultProps = {
  activeItem: DEFAULT_TAB,
};

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
  activeItem: PropTypes.string,
  clickHandler: PropTypes.func,
  comments: PropTypes.array,
};

export default Tabs;
