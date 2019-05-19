import React from 'react';
import PropTypes from 'prop-types';

const GenreList = ({genres, clickHandler}) => {
  const genreList = [...genres].map((genre, i) =>
    <li
      className="catalog__genres-item"
      key={`genre-${i}`}
    >
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );

  return (
    <ul className="catalog__genres-list" onClick={clickHandler}>
      {genreList}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default GenreList;
