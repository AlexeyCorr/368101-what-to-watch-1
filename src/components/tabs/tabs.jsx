import React from 'react';
import PropTypes from 'prop-types';

import Reviews from './reviews/reviews.jsx';
import Details from './details/details.jsx';
import Overview from './overview/overview.jsx';

const DEFAULT_TAB = `Overview`;

const Tabs = ({film, activeItem, clickHandler}) => {
  const showTab = (activeTab, data) => {
    switch (activeTab) {
      case `Overview`:
        return <Overview film={data}/>;
      case `Details`:
        return <Details film={data}/>;
      case `Reviews`:
        return <Reviews film={data}/>;
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

      {showTab(activeItem, film)}

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
};

export default Tabs;
