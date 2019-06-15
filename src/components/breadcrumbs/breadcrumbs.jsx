import React from 'react';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';

const Breadcrumbs = ({film}) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={Path.FILM(film.id)}
            className="breadcrumbs__link"
          >
            {film.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
