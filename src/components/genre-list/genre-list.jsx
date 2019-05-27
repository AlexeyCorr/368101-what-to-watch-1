import React from 'react';
import PropTypes from 'prop-types';

const GenreList = ({genres, clickHandler, activeItem}) => {
  const genreList = [...genres].map((genre, i) =>
    <li
      className={`catalog__genres-item ${activeItem === genre ? `catalog__genres-item--active` : ``}`}
      key={`genre-${i}`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          clickHandler(genre);
        }}
      >
        {genre}
      </a>
    </li>
  );

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
};


GenreList.propTypes = {
  genres: PropTypes.object.isRequired,
  activeItem: PropTypes.string,
  clickHandler: PropTypes.func,
};
GenreList.defaultProps = {
  activeItem: `All genres`,
};

export default GenreList;
